---
aliases: []
tags:
  - Computing/Computer-Architecture
---

## 2.1. Introduction

[[Instruction Set]] language of the hardware. Vocabulary understood by a given architecture.

## 2.2. Operations of the Computer Hardware

- **Register**: Places to store variables

An instruction in MIPS looks like this:

`add $s1, $s2, $s3` which means

`s1` ← `s2` + `s3`

Notice that _one instruction has three operands._ In MIPS, there are 32 registers and $2^{30}$memory addresses which can be used as operands.

> _Simplicity favors regularity._ It’s easier to design hardware for a fixed number of operands and registers.

## 2.3. Oper_and_s Of the Computer Hardware

- **Word**: size of a register (32-bits in a 32-bit architecture)
  i.e. `1 word = 4 bytes = 32 bits` > _Smaller is Faster._ Having only 32 registers is simple; having 3 operands is simple. More registers will lead to slower clock cycles. >
- **Alignment Restriction**: data in memory must be aligned to multiples of 4.
  i.e. since each memory address refers to **one byte**, valid memory addresses are `0x04`, `0x08`, … (each are 1 word in size).
- **Endian-ness**: big endian refers the leftmost `0x04` referring to `0x04~0x07` and so on. little endian refers to the rightmost `0x04` referring to `0x01~0x04` and so on. Picture: big▶️little

**Data Transfer Instruction:** instruction to move data between RAM and registers. Supply the memory address stored in a register

```c
// Load Word Example
lw $t1, 8($s1)
// access *address* stored in $s1 in RAM
// move down 8 bytes (offset)
// and store that in register $t1

// Store Word Example
sw $t1, 8($s1)
// the same thing, but storing $t1 into memory addr $s1 offset by *2 words*
```

Note that the **offset** is in _bytes, not words._ → Thus to access `arr[1]` you should offset `4($s1)`. Offset addressing is natural for _arrays_ and _structs_ (from C).

**Immediate Operations:** instructions to add a _constant_ to a register value. Immediate operations are very fast, since they don’t need to load data from memory.

```c
addi $s1, $s2, 4 // "add immediate"
// store in s1 the sum of value in s2 and 4
// s1 = s2 + 4;
```

## 2.4. Signed and Unsigned Numbers

```c
0000 0000 0000 0000 0000 0000 0000 0000 // 32 bit number = 1 word
// most significant bit            // least significant bit
```

**Two’s Compliment Representation**: think of it like this:

$$
-2^{31}-1 \cdot\cdot\cdot-1, 0 ,1 \cdot\cdot\cdot 2^{31}
$$

```c
1000 0000 ... 0000 = -2^31 - 1
...
1111 1111 ... 1111 = -1
// this is where it resets...
0000 0000 ... 0000 = 0
0000 0000 ... 0001 = 1
...
0111 1111 ... 1111 = 2^31
// and overflow back to 1000 0000 ... 0000 = -2^31 - 1
```

This representation is the default since 1965.

Advantages of Two’s Compliment Representation:

- **Binary to Decimal**: most significant bit is `-2^32` and the rest is normal binary
- **Negation**: invert bits and add one—_this works both ways!_
- **Sign Extension(=Precision Extension)** (16→32 bits, etc.): extend the sign bit leftward (most significant bit)
  i.e. positive number: extend the zeros; negative number: extend the one.

## 2.5. Representing Instructions in the Computer

**Register Representation:**

```c
#8  ~ #15: $t0 ~ $t7
#16 ~ #23: $s0 ~ $s7
```

**Instruction in Machine Code: i**nstructions can be R-type or I-type. Each have different sized-fields (but is 32 bits in total).

```c
// R type instruction example
add $t1, $s1, $s2
// divided into fields:
op   | rs  | rt  | rd  |shamt| funct | // field names
0    | 17  | 18  | 8   |  0  | 32    | // machine code in decimal
6b   | 5b  |  5b |  5b |  5b | 6b    | // bit size of each field
```

Each part of the instruction is called a field. **List of Field Names:**

- `op`: opcode, the operation
- `rs`: register source
- `rt`: register source 2
- `rd`: register destination (result of the operation)
- `shamt`: shift amount
- `funct`: function code, select a specific variant of the opcode.

**Line label.** `loop` in the following instruction is a line label. It’s just there for humans; like comments in code.

```
loop: lw [...]
			add [...]
			j loop
```

## 2.6. Logical Operations

| Operation | command | example | explaination | comments |

| ----------- | --------- | ----------------- | ------------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------ |

| Shift Left | sll | sll $t2, $s0, 4 | s0to left 4 bits, store in t2 | equivalent to multiply by 2^n |

| Shift Right | srl | srl $t2, $s0, 4 | s0to right 4 bits, store in t2 | equivalent to divide by 2^n |

| AND | and, andi | and $t0, $t1, $t2 | t0 = t1 & t2 | andi has a constant in place of a second register. |

| OR | or, ori | or $t0, $t1, $t2 | t0 = t1 | t2 | orihas a constant in place of a second register. |

| NOT | nor | nor $t0, $t1, $t2 | | NOR(A, B) = NOT (A OR B) thus if one operator is 0, then it becomes a simple NOT command. |

## 2.7. Instructions for Making Decisions

- **Basic block:** a block of assembly code without [[Branching (Computer Science)|branches]]

Two types of `jump` operations: **conditional branches** and **unconditional jump.**

Conditional Branches:

```c
beq $t0, $t1, L1 // branch if equal
// if t0 == t1, goto label L1
bne $t0, $t1, L1 // branch not equal
// if t0 != t1, goto label L1
```

Unconditional Jump:

```c
j Exit // go to label Exit
```

Less Than (branch on less than is not included since it takes clock cycles)

```c
/* SIGNED */
slt $t0, $s1, $s2 // set on less than
// if s1 < s2, t0 = 1 ; else t0 = 0
slti $t0, $s1, 10 // set on less than immediate
// second argument is a constant

/* UNSIGNED */
sltu $t0, $s1, $s2 // slt, but compare as if two integers are unsigned
sltiu $t0, $s1, $s2 // slti, but compare as if two integers are unsigned
```

> [!info] **Treating signed numbers as unsigned is useful in checking $0 \leq x \lt y$.** > `sltui $t0, $s1, 10` ← if `s1` is negative, treating it as an unsigned number the $2^{31}$th place has a 1 which makes it a *very big signed number—*and thus `t0` is set to 0. If `s1`is positive then its _value is same signed or unsigned_; thus `s1 < 10` is evaluated normally.

## 2.8. Supporing Procedures in Computer Hardware

**Procedure**: =function call in assembly.

- Leaf Procedure. A procedure that doesn’t call any other procedures. (think: the end of a _branch_)

To execute a procedure you need to:

1. Put parameters in a place expected by the procedure
2. Transfer control to the procedure
3. Perform task
4. Put result value in expected place (by the caller)
5. return control to caller

Registers (usually) used for procedure calling:

- `a0 ~ a3`: pass arguments
- `v0 ~ v1`: return values
- `ra`: return address (return here after procedure is done)
- Program Counter (PC): holds the memory address of the instruction currently executing

Instruction specialized for procedure calling:

```c
jal Procedure // jump and link
// an unconditional jump + saves current calling address to $ra
// used when transferring control to the procedure
jr $ra // jump register
// an unconditional jump but instead of a Label, jump to the address in register $ra
// used when returing control to the caller from a procedure
```

---

**Spilling Registers into the Stack**

- **Stack.** When `a0 ~ a3` isn’t enough for a procedure, `s0 ~ s7` _should be_ saved into a memory portion call thed **stack.** (`t0 ~ t9` is _not_ saved)
  - `$sp` points to the end of the stack (where spilled data should be stored next)
  - placing and removing data is called _push / pop_
  - By convention stack grows from higher memory address to lower memory address, e.g. from `0x08` to `0x04`, and by **_one word each._**
- **Procedure Frame (=Activation Record).** Space on stack reserved for storing the procedure’s local varaibles and arrays that don’t fit into registers. The frame is located below the saved registers at the little end of the stack.
  - `$fp` (frame pointer) points to the little end of the procedure frame. This is useful because stack pointer can change during a procedure.

Calling a leaf procedure:

1. adjust stack pointer by number of registers that requires saving:

   ```c
   addi $sp, $sp, -12 // stack grows down
   sw $s1, 8($sp) // push first variable
   sw $s2, 4($sp)
   sw $s3, 0($sp)
   ```

2. execute procedure body
3. save return value to registers `v0 ~ v1`
4. restore register values to registers

   ```c
   lw $s3, 0($sp) // pop last variable
   lw $s2, 4($sp)
   lw $s1, 8($sp)
   addi $sp, $sp, 12 // stack deletes up
   ```

Data preserved/not preserved across procedure calls:

| Preserved                              | Not Preserved                           |
| -------------------------------------- | --------------------------------------- |
| s0 ~ s7                                | t0 ~ t9                                 |
| sp stack pointer                       | a0 ~ a3 argument register               |
| ra return address                      | v0 ~ v1 return value register           |
| stack above stack pointer (bigger end) | stack below stack pointer (littler end) |

(_Not storing the temporary registers `t0~t9` reduces memory store/load.)_

---

**Allocating Data on the Heap**

Structure of the executable, from big end to little end:

1. The Stack grows down (higher address → lower address). `sp` → `7fff fffc`
2. The Heap grows up (lower addr → higher addr).
3. Text Segment (instructions)
4. Reserved

## 2.9. Communicating with People

**ASCII Table** on p.106. Notice that:

- one ascii charater is _1 byte (=8 bits)_
- `0b0` is `NULL`
- upper and lower letters differ by $32 = 2^5$

To store strings, either:

1. first position in string stores length
2. accompanying variable holds string length or
3. the last position marks the end of the string

Sinced people use ASCII a lot, and ASCII is 1 byte, there are data transfer instructions for bytes:

```c
lb $t0, 0($sp) // load byte (and sign extend)
sb $t0, 4($sp) // store byte and sign extend
lbu $t0, 0($sp) // load byte unsigned
sbu $t0, 4($sp) // store byte unsigned
```

---

**Unicode** is used by Java and other modern languages. **Notice that:**

- UTF-16 is default, using 16-bits
- UTF-8 is ASCII-compatible, and is variable-length
- UTF-32 uses 32 bits

MIPS also accomodates UTF-16 by providing data transfer instructions for half-words (16-bits):

```c
lh $t0, 0($sp) // load halfword and sign extend
sh $t0, 4($sp) // store halfword and sign extend
lhu $t0, 0($sp) // load halfword unsigned
shu $t0, 4($sp) // store halfword unsigned
```

## 2.10. MIPS Addressing for 32-bit Immediates and Addresses

**When you need to load a 32-bit constant into register**, you need two instructions (a new one, `lui`):

```c
/* loading 0000 0000 0011 1101 0000 1001 0000 0000 */
lui $s0, 61 // load upper immediate;
// 61   = 0000 0000 0011 1101 (upper half of constant)
ori $s0, $s0, 2304 // logical OR immediate;
// 2304 = 0000 1001 0000 0000 (lower half of constant)
// s0 has the full value.
```

Addressing in Jumps and Branches

```c
jump instruction:
j 10000
|  2  |             10000                 |
|  6b |              26b                  |   // can use 26 bits for addressing

branch instruction:
bne $s0, $s1, Exit
|  5   |  16   |  17   |        Exit      |
| 6b   |  5b   |  5b   |        16b       |   // can only use 16 bits for addressing
```
