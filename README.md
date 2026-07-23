# LearnPlaywright3x

A hands-on repository for learning **Playwright 3.x** and **JavaScript** fundamentals.

## Repository Structure

| Folder | Description |
|--------|-------------|
| `01_chapter_Javascript/` | Hello World and getting started with JavaScript |
| `02_chapter_Javascript/` | Core concepts such as `let` and variable declarations |
| `03_chapter_Identifier/` | Identifier naming rules, comments, and related exercises |
| `04_chapter_Literal/` | JavaScript literals, null, undefined, and number types |
| `05_chapter_Operator/` | Operators: assignment, arithmetic, comparison, logical, and confusing comparisons |
| `06_chapter_Statement/` | Statements, conditions, and multiple condition handling |
| `07_chapter_switch/` | Switch-case statements and related exercises |
| `08_UserInputs/` | User input handling with `prompt-sync` and `fs` |
| `09_chapter_Loops/` | Loops: `for`, `while`, `do...while`, and nested loops |
| `IQ_Notes/` | Quick reference notes and reusable prompt templates |

## Chapters

- **01 - Hello World** (`01_HelloWorld.js`)
- **02 - Let Concept** (`02_let_concept.js`)
- **03 - Identifier Rules** (`03_Identifer_Rules.js`, `04_Identifer_Rules_Part2.js`)
- **04 - Comments** (`05_Comments.js`)
- **05 - Identifier IQ** (`06_Identifer_IQ.js`)
- **06 - Literal** (`07_Literal.js`, `08_null_undefined.js`, `09_Null_IQ.js`, `10_Literal.js`, `11_Number.js`, `12_Number_Part2.js`)
- **07 - Data Type** (`13_DataType.js`)
- **08 - Operators** (`14_Assignment_Operator.js`, `15_Arithmetic_Opeartor.js`, `16_Comparsion_Operator.js`, `17_Logical_Operators.js`, `18_Confusing_Comparsion.js`, `18_Confusing_Comparsion_P2.js`, `20_Question.js`, `21_String_Op.js`, `22_Ternary_Op.js`, `23_IQ.js`, `24_IQ.js`, `25_IQ.js`, `26_IQ.js`, `27_IQ.js`, `28_Nested_Terny_Op.js`, `29_IQ_NT.js`, `30_NT_IQ2.js`, `31_Type_Op.js`, `32_In_De_Op.js`, `33_Ad_Incre.js`, `34_Incre_Part2.js`, `35_Decrement.js`, `36_Null_Coalescing.js`)
- **09 - Statements** (`37_IQ.js`, `38_IQ2.js`, `38_Multiple_Condition.js`)
- **10 - User Inputs** (`50_Prompt.js`, `51_Fs.js`)
- **11 - Loops** (`52_No_Loop_Repeatitive_code.js`, `53_For_Loop.js`, `54_Increment.js`, `55_For_Loops.js`, `56_For_Loops2.js`, `57_While.js`, `58_While.js`, `59_Modie.js`, `60_While_Vs_For.js`, `61_Do_While.js`, `62_DoWhile_vs_While.js`, `63_NestedFor_lOOP.js`)

## Notes

- `javascript-engine-layers.md` – Overview of JavaScript engine layers
- `prompt-layer-explainers.md` – Reusable prompt templates for explaining concepts

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd LearnPlaywright3x
   ```
2. Open any chapter file in your favorite editor and run it with Node.js:
   ```bash
   node 01_chapter_Javascript/01_HelloWorld.js
   ```

## Dependencies

Some scripts require the `prompt-sync` package for interactive input. Install it once at the project root:

```bash
npm install
```

Or install it directly:

```bash
npm install prompt-sync
```

## Input Behavior Notes

- **`50_Prompt.js`** uses `prompt-sync` and returns immediately after you press **Enter**.
- **`51_Fs.js`** uses `require('fs').readFileSync(0)` which reads from **stdin** until the input stream is closed. After typing your value and pressing **Enter**, you must signal EOF:
  - **Windows**: `Ctrl + Z` then **Enter**
  - **Mac / Linux**: `Ctrl + D`

## License

This project is for educational purposes.
