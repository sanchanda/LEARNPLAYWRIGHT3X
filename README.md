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
| `10_chapter_Arrays/` | Arrays: creation, access, modification, iteration, searching, and IQ exercises |
| `11_chapter_Functions/` | Functions: basic types, expressions, arrow functions, template literals, IIFEs, spread/return, and hoisting/TDZ concepts |
| `12_chapter_Fn_Closure/` | Scope and closures: how functions remember their lexical environment |
| `13_chapter_String/` | Strings: literals, properties, searching, extraction, conversion, and string functions |
| `14_chapter_Objects/` | Objects: creation, properties, methods, call-by-reference vs call-by-value |
| `15_Multi_Dimensions_Array/` | Multi-dimensional arrays: matrices, iteration, and star-pattern exercises |
| `MCQ/` | Multiple choice questions on JavaScript/Playwright topics |
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
- **12 - Arrays** (`64_Array.js`, `65_Array.js`, `66_Array_Creation.js`, `67_Array_Access_Modify.js`, `68_Arrays_Adding_Remove.js`, `69_Array_REAL.js`, `70_Array_Searching.js`, `71_IQ.js`, `72_Array_Interate.js`, `73_Arrays_Transform.js`, `74_Sorting.js`, `75_Slicing.js`, `76_ArrayConcat.js`, `77_Array_Checking.js`, `78_Copy.js`, `79_Destructuring.js`, `All_Array_Methods.js`)
- **13 - Functions** (`78_Fn.js`, `79_Fn.js`, `80_Type1_Basic_Fn.js`, `81_Type2_Basic_Fn.js`, `82_Type3_Basic_Fn.js`, `83_Type4_Basic_Fn.js`, `84_Template_Literal.js`, `85_Fn_Exp.js`, `86_Fn_Arrow.js`, `87_Fn_Arrow.js`, `88_REAL.js`, `89_IIFE_Function.js`, `90_Spread_Fn.js`, `91_Return_Fn.js`, `92_Var_Let_Const.js`, `93.Hoisting.js`, `94_Var_Hoisting.js`, `95_Fn_Hoisting.js`, `96_Let_Hoisting.js`, `97_Let.js`, `98_TDZ.js`, `99.IQ.js`, `100_IQ.js`, `101.js`)
- **14 - Scope & Closure** (`104_Scope_Fn.js`, `105_Closure.js`, `106_Closure_Remembers.js`, `107_Fn_Closure_REAL.js`, `108_Fn_Simple.js`)
- **15 - Strings** (`109_String.js`, `110_String_Fn.js`, `111.Str_Searching.js`, `112_Extraction_String.js`, `113_String_More.js`, `114_Extra.js`, `115_Fn_String_Conversion.js`)
- **16 - Objects** (`116_Objects.js`, `117_Object_Person.js`, `118_Object.js`, `119_Objects.js`, `120_Config.js`, `121_CallBy_Ref_CallByValue.js`)
- **17 - Multi-Dimensional Arrays** (`122_Array.js`, `123_Array_2.JS`, `124_Array_Fn.js`, `125_Right_Pattern.js`, `126_Left_Hand.js`, `127_Pyramid_Pattern.js`)

## Notes

- `javascript-engine-layers.md` – Overview of JavaScript engine layers
- `javascript_Array_Functions.md` – Reference table of array mutator/accessor/iteration methods
- `prompt-layer-explainers.md` – Reusable prompt templates for explaining concepts
- `102_Hoisting_TDZ.md` – Complete guide to hoisting (`var`, `let`, `const`, functions) and temporal dead zone
- `String_Cheatsheet.md` – Reference cheatsheet for string methods: searching, extraction, splitting, replacing, and SDET recipes

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
