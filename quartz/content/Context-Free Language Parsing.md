---
aliases: []
tags:
  - Computing/Formal-Languages
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
      - The start variable always has the $\$$ symbol in its follow set.
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
      3. If it’s a final state, only the entries for the elements of FOLLOW should be populated;
         put a **“reduce by rule number #” or rN** and the rule number is the rule of the state (since it’s a final state, there should be only one rule)
      4. If it’s a final state but its rule is $S’\rightarrow S$, it’s special; only populate the “$” entry.
         put a **“accept” or acc** in that place.
      5. If the state contains a $**\lambda$-rule,** then always put a **“reduce by rule #” or rN,** where the rule number is that lambda rule ← this should be in the **“$” column\*\*

![Untitled](Untitled%204.png)
