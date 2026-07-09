# How JavaScript Engine Works: Layer-by-Layer Breakdown

## Overview

A JavaScript engine (like V8 in Chrome/Node.js, SpiderMonkey in Firefox, or JavaScriptCore in Safari) transforms human-readable JS code into machine-executable instructions through several distinct layers.

---

## JavaScript Engine Layers: Comparison Table

| **Layer** | **Component Name** | **Role / Purpose** | **Input** | **Output** | **Key Characteristics** |
|-----------|-------------------|-------------------|-----------|------------|------------------------|
| **1. Source** | `.js` File | Human-written JavaScript code | Developer intent | Raw text string | Readable, high-level, untyped |
| **2. Lexer / Tokenizer** | Scanner (V8: `scanner.cc`) | Breaks code into smallest meaningful units | Raw JS string | **Token Stream** | Identifies keywords, identifiers, operators, literals; removes whitespace/comments |
| **3. Parser** | Syntax Analyzer (V8: `parser.cc`) | Checks grammar rules and builds structure | Token Stream | **Abstract Syntax Tree (AST)** | Detects syntax errors; creates hierarchical tree representation |
| **4. AST** | Abstract Syntax Tree | Structured representation of code logic | Parser output | Validated tree structure | Each node represents a construct (function, variable, expression) |
| **5. Interpreter** | Ignition (V8), Baseline (SpiderMonkey) | Quickly executes code without optimization | AST | **Bytecode** + Immediate execution | Fast startup, generates bytecode, collects type feedback (profiling) |
| **6. Compiler (JIT)** | TurboFan (V8), IonMonkey (SpiderMonkey) | Optimizes hot code based on runtime profile | Bytecode + Type Feedback | **Optimized Machine Code** | Speculative optimization, inlining, type specialization; can deoptimize |
| **7. Execution** | Runtime / VM | Runs the final code and manages resources | Bytecode or Machine Code | Program behavior / Output | Memory allocation, garbage collection, call stack management |
| **8. Garbage Collector** | Orinoco (V8), Cycle Collector | Reclaims unused memory | Heap objects | Freed memory | Mark-and-sweep, generational collection, avoids memory leaks |

---

## Simple Code Example

We will walk this code through every layer:

```javascript
// example.js
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result);
```

**Expected Output:**
```
5
```

---

## Layer-by-Layer Walkthrough

### Layer 1: Source Code
**Input:**
```javascript
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result);
```
- This is the raw text file saved as `example.js`.
- The engine reads this as a UTF-8 encoded string.

---

### Layer 2: Lexer / Tokenizer
**Input:** Raw JS string
**Output:** Token Stream

| **Token Type** | **Value** | **Line** |
|---------------|-----------|----------|
| Keyword | `function` | 1 |
| Identifier | `add` | 1 |
| Punctuator | `(` | 1 |
| Identifier | `a` | 1 |
| Punctuator | `,` | 1 |
| Identifier | `b` | 1 |
| Punctuator | `)` | 1 |
| Punctuator | `{` | 1 |
| Keyword | `return` | 2 |
| Identifier | `a` | 2 |
| Punctuator | `+` | 2 |
| Identifier | `b` | 2 |
| Punctuator | `}` | 3 |
| Keyword | `const` | 5 |
| Identifier | `result` | 5 |
| Punctuator | `=` | 5 |
| Identifier | `add` | 5 |
| Punctuator | `(` | 5 |
| Numeric | `2` | 5 |
| Punctuator | `,` | 5 |
| Numeric | `3` | 5 |
| Punctuator | `)` | 5 |
| Punctuator | `;` | 5 |
| Identifier | `console` | 6 |
| Punctuator | `.` | 6 |
| Identifier | `log` | 6 |
| Punctuator | `(` | 6 |
| Identifier | `result` | 6 |
| Punctuator | `)` | 6 |
| Punctuator | `;` | 6 |

- The lexer scans character by character.
- It recognizes `function` as a keyword, not an identifier.
- Comments and whitespace are discarded (not shown in this example).

---

### Layer 3: Parser
**Input:** Token Stream
**Output:** Abstract Syntax Tree (AST)

The parser validates syntax (e.g., ensuring every `(` has a `)`) and builds a tree:

```
Program
├── FunctionDeclaration (name: "add")
│   ├── params: [Identifier "a", Identifier "b"]
│   └── body: BlockStatement
│       └── ReturnStatement
│           └── BinaryExpression (operator: "+")
│               ├── left: Identifier "a"
│               └── right: Identifier "b"
│
├── VariableDeclaration (kind: "const")
│   └── VariableDeclarator
│       ├── id: Identifier "result"
│       └── init: CallExpression (callee: Identifier "add")
│           ├── arguments: [Literal 2, Literal 3]
│
└── ExpressionStatement
    └── CallExpression (callee: MemberExpression "console.log")
        ├── object: Identifier "console"
        ├── property: Identifier "log"
        └── arguments: [Identifier "result"]
```

- If you wrote `function add(a, b { return a + b; }` (missing `)`), the parser throws a **SyntaxError** here.

---

### Layer 4: AST (Abstract Syntax Tree)
**Input:** Parser output
**Output:** Validated tree structure

The AST is a nested object representation. For `add(2, 3)`:

```json
{
  "type": "CallExpression",
  "callee": {
    "type": "Identifier",
    "name": "add"
  },
  "arguments": [
    { "type": "Literal", "value": 2 },
    { "type": "Literal", "value": 3 }
  ]
}
```

- The AST is language-agnostic in structure.
- Tools like Babel, ESLint, and Prettier work directly on the AST.

---

### Layer 5: Interpreter (Ignition in V8)
**Input:** AST
**Output:** Bytecode + Execution + Profiling Data

The interpreter generates **bytecode** — a compact, platform-independent instruction set:

```
LdaSmi [2]          ; Load small integer 2 into accumulator
Star r0             ; Store accumulator into register r0
LdaSmi [3]          ; Load small integer 3 into accumulator
Star r1             ; Store accumulator into register r1
LdaGlobal [add]     ; Load global variable 'add' into accumulator
CallUndefinedReceiver0 r0, r1  ; Call function with r0, r1 as args
Star r2             ; Store result into register r2
LdaGlobal [console] ; Load global 'console'
GetNamedProperty [log] ; Get console.log
Ldar r2             ; Load r2 into accumulator
CallUndefinedReceiver0  ; Call console.log with accumulator
Return              ; Return
```

**What happens during execution:**
1. The interpreter runs this bytecode immediately.
2. It tracks what types `a` and `b` actually are (e.g., both numbers).
3. It collects **type feedback** (profiling) in "feedback vectors."

---

### Layer 6: JIT Compiler (TurboFan in V8)
**Input:** Bytecode + Type Feedback
**Output:** Optimized Machine Code

After the `add` function is called many times (hot path), TurboFan compiles it to native machine code:

```
; Hypothetical x64 assembly for add(a, b)
mov rax, [rbp + 16]   ; Load argument a
mov rbx, [rbp + 24]   ; Load argument b
add rax, rbx          ; Add them (CPU native ADD instruction)
ret                   ; Return result in rax
```

**Optimizations applied:**
| **Optimization** | **Description** | **Applied To Our Code** |
|-----------------|----------------|------------------------|
| **Inlining** | Replace function call with function body | If `add` is small, it may be inlined into the caller |
| **Type Specialization** | Generate code for specific types | Assumes `a` and `b` are numbers (based on feedback) |
| **Constant Folding** | Evaluate constants at compile time | Not applicable here (2 and 3 are already literals) |
| **Escape Analysis** | Determine if objects escape scope | Not applicable here (primitive numbers) |

**Deoptimization (Bailout):**
If later `add("2", "3")` is called (strings instead of numbers), TurboFan's assumption is wrong. The engine **deoptimizes** — throws away optimized machine code and falls back to the interpreter or less optimized code.

---

### Layer 7: Execution / Runtime
**Input:** Bytecode or Machine Code
**Output:** Program Behavior

**Call Stack during execution:**

| **Step** | **Call Stack** | **Heap** | **Action** |
|----------|---------------|----------|------------|
| 1 | `main` | - | Script starts |
| 2 | `main` → `add(2, 3)` | - | Function called, pushed to stack |
| 3 | `main` → `add(2, 3)` | - | `a + b` evaluated to `5` |
| 4 | `main` | `result = 5` | `add` returns, popped from stack |
| 5 | `main` → `console.log(5)` | `result = 5` | `console.log` called |
| 6 | `main` | `result = 5` | Output `5` printed |
| 7 | *(empty)* | - | Script ends, stack cleared |

---

### Layer 8: Garbage Collector
**Input:** Heap Objects
**Output:** Freed Memory

In our example:
- The `result` variable holds the primitive value `5`.
- Primitives are stored on the **stack**, not the heap.
- `console` is a global object living in the heap.
- After the script ends, the garbage collector identifies that `result` (stack) is out of scope.
- Global objects like `console` persist as long as the process runs.

| **GC Phase** | **What It Does** | **Our Example** |
|-------------|------------------|-----------------|
| **Mark** | Traverse objects from roots, mark reachable ones | Marks `console`, `add` function object |
| **Sweep** | Free unmarked objects | Nothing to free immediately |
| **Compact** | Move objects to reduce fragmentation | Not triggered for this tiny example |

---

## Summary Flow Diagram

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌─────────────┐
│   Source    │────▶│    Lexer     │────▶│   Parser    │────▶│     AST     │
│  (JS File)  │     │  (Tokens)    │     │  (Grammar)  │     │  (Structure)│
└─────────────┘     └──────────────┘     └─────────────┘     └──────┬──────┘
                                                                    │
                   ┌────────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌─────────────┐
│   Machine   │◀────│  JIT Compiler│◀────│ Interpreter │◀────│   Bytecode  │
│    Code     │     │  (TurboFan)  │     │  (Ignition) │     │  Generation │
└──────┬──────┘     └──────────────┘     └─────────────┘     └─────────────┘
       │
       ▼
┌─────────────┐     ┌──────────────┐
│  Execution  │────▶│ Garbage Coll.│
│  (Runtime)  │     │  (Orinoco)   │
└─────────────┘     └──────────────┘
```

---

## Quick Reference: Engine Components by Browser

| **Browser / Runtime** | **Engine** | **Interpreter** | **JIT Compiler** | **Garbage Collector** |
|----------------------|-----------|----------------|-----------------|----------------------|
| Chrome, Edge, Node.js | V8 | Ignition | TurboFan | Orinoco, Oilpan |
| Firefox | SpiderMonkey | Baseline Interpreter | IonMonkey, Warp | Generational GC |
| Safari | JavaScriptCore | LLInt (Low Level Interpreter) | FTL (Faster Than Light), B3 | Riptide |
| Edge (legacy) | Chakra | N/A | N/A | N/A |

---

## Key Takeaways

1. **Lexer** turns text into tokens (words for the computer).
2. **Parser** checks grammar and builds an AST (sentence structure).
3. **Interpreter** executes quickly and collects profiling data.
4. **JIT Compiler** optimizes frequently-run code into fast machine code.
5. **Deoptimization** happens when assumptions fail, ensuring correctness.
6. **Garbage Collector** automatically cleans up unused memory.

This pipeline balances **fast startup** (interpreter) with **peak performance** (JIT compiler).
