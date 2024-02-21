---
aliases: []
tags:
  - Computing/Formal-Languages
---

Section: [[Pushdown Automata]]

def. a **Context-Free Grammar** (CFG) is a grammar whose production rules consist of:

$$
A\rightarrow \bold{x}
$$

…where $A$ is a variable, and $\bold{x}$ is a string of variables and terminals.

> [!info] CFGs can check for syntactically correct programs

- Simple Grammer: a CFG where any pair of $(var,term)$ appear in no more than one rule.
- **Ambiguous Grammar**: there exists a string in the language that has more than one derivation.

def. a **Parse Tree** [=Derivation Tree] shows the derivation steps of a single string from a start symbol according to the rules of a grammar.

![Untitled](Untitled%203.png)

- The leaves of the tree read right-to-left is the **yield** of the tree—in this case, $aa\epsilon b$ is the yield.
- The yield should not contain the $\lambda$s. (obviously)

def. Leftmost Derivation. Replace the leftmost variable in every step.

def. Rightmost Derivation. Replace the rightmost variable in every step.

---

thm. Determinability. If the CFG doesn’t contain rules of the form $A\rightarrow\lambda$ or $A\rightarrow B$, then we can determine for all $w$ if it is in the language of the CFG.

thm. a Context-Free Grammar is equivalent to an NPDA.

## NPDA → CFG

alg. Given NPDA, you can define an equivalent CFG in the following steps:

1. For any transitions that pop/push _more_ than **one variable** onto the stack:
   1. Use a new state to split out the transition, so that one transition only push/pops **one variable** onto the stack
2. Then, for each transition arc:
   1. If the transition arc is a **pop arc** that pops $A$ off the stack, i.e.:
      from state $i$ to $j$ is in the form $t,A;\lambda$,
      then construct a production rule for the grammar as:
      $(q_i,A,q_j)\rightarrow t$
   2. If the transition arc is a **push arc** that pushes $A$ onto the stack i.e.:
      from state $i$ to $j$ is in the form $t,\gamma,A\gamma$
      then construct a production rule for the grammar as:
      $(q_i,\gamma,{\color{red}q_k})\rightarrow t(q_jA{\color{blue}q_l})({\color{blue}q_l} \gamma{\color{red}q_k})$, where ${\color{red}q_k},{\color{blue}q_l}$ is every possible combination of states in the PDA(!)
3. Finally, of all the rules generated, if any variables on the right side of the arc don’t appear on the left side, that rule is useless.

## CFG → NPDA

alg. Given a CFG, you can build an **LL-NPDA** in the following steps. This is a top-down design:

1. There are 3 total states in the NPDA: 0, 1, 2
2. Move from state 0 to state 1 by adding the start variable S onto the stack
3. The middle state has loops for every rule of the CFG. Pop off the LHS, add the RHS to stack while processing any beginning terminals
4. Move from state 1 to final state 2 in a $\lambda$-transition

![Untitled](Untitled%201%201.png)

alg. Given CFG, you can build an **LR-NPDA** in the following steps. This is a bottom-up design:

1. There are 3 total states in the NPDA: 0, 1, 2
2. State 0 has loops for:
   1. …every rule of the grammar. Each rule will pop the RHS and push the LHS of the rule
   2. …every terminal of the grammar. Each terminal will be pushed onto the stack while reading that terminal.

![Untitled](Untitled%202%201.png)

---

## LL Parsing

def. **$LL(k)$ Parsing**. Left-to-Right, Left-most derivation Parser with $k$ lookaheads.

alg. Given CFG $G$, $LL(k)$ parsing occurs in the following steps:

1. Create the $\text{First}(),\text{Follow}()$ sets for each of the each of the variables in the grammar.
   1. $\text{First}()$ is the set of terminals (including $\lambda$) that can lead the string derived.
      - Created by checking the variable on the left side of the production: ${\color{red}A}\rightarrow aX$.
        Common sense will be enough.
      - Don’t forget the check variables that go to $\lambda$ i.e. disappear. **$\lambda$ is only included in the FIRST set if the whole variable can disappear to $\lambda$.**
   2. $\text{Follows}()$ is created by checking the variable on the right side of the production: $A\rightarrow {\color{red}aX}$.
      - The start variable always has the $\
$$ symbol in its follow set.
      - Use the first sets to make life simpler. $\lambda$ is always removed.
2. Create the $LL(1)$ parse table.
   1. For each variable, check the rules.
   2. There must be an entry for **every element of the first set.** check which rule makes the most sense [= FIRST set of the RHS of the rule is the lookahead symbol]
   3. If FIRST set includes a $\lambda$ (and the variable can goto) $\lambda$, ⇒ There must be a $\lambda$ entry for **every element of the follows set…**
   4. …however, if the FIRST set includes a $\lambda$ **but** the variable **cannot** goto $\lambda$, **find another rule that makes sense to put there.**
3. Use the table to do the necessary steps for parsing the string.

![Untitled](Untitled%203%201.png)

## LR Parsing

def. $LR(k)$ Parsing. **L**eft-to-Right, **R**ight-most **Reverse** derivation parser with $k$ lookaheads.

alg. Given CFG $G$, $LR(k)$ parsing occurs in the following steps:

1. Set up the grammar so that it’s ready to parse:
   1. Change the start symbol to $S'\rightarrow S$. This is rule #0.
   2. Number the rules $1$ through $n$.
2. Calculate the FIRST and FOLLOW sets of variables.
3. Construct a $LR$ parsing DFA in the following steps:
   1. The start state has **rule number 0 and rules for $S$**. Place markers ($\_$) in the beginning.
   2. For each rule, “process” one _symbol_ at a time.
      Processing means that to transition to another state…
      …with arc labeled *symbol
      …*to create a new state with the marker jumped over that _symbol_.
   3. You have a new state with one rule that has the jumped marker. Now, add to the state **the closure of that rule.** The closure of a rule is calculated as such:
      1. If the marker is in front of a variable, the derivation rules for that variables is included
      2. if the market is in front of a terminal, don’t do anything
4. Construct a $LR$ Parsing table from the DFA to use during parsing:
   1. Do the following for every state of the DFA [=every row of the parse table]:
      1. For every transition arc, put an entry in the table, for that **state number** and **arc label:**
      2. If it’s just a transition arc, put a **“shift to state #” or sN**
      3. If it’s a final state, only the entries for the elemetns of FOLLOW should be populated;
         put a **“reduce by rule number #” or rN** and the rule number is the rule of the state (since it’s a final state, there should be only one rule)
      4. If it’s a final state but its rule is $S’\rightarrow S$, it’s special; only populate the “$” entry.
         put a **“accept” or acc** in that place.
      5. If the state contains a $**\lambda$-rule,** then always put a **“reduce by rule #” or rN,** where the rule number is that lambda rule ← this should be in the **“$” column\*\*

![Untitled](Untitled%204.png)
