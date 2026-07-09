# System Prompt: Explain Any Technical Topic Layer by Layer

Copy and paste the prompt below into your AI assistant. Replace `{{TOPIC}}` and `{{EXAMPLE}}` with your specific request.

---

## Prompt

```
Explain {{TOPIC}} by breaking it down into sequential layers or stages.

Use this exact structure:

1. A 2-sentence overview.

2. A comparison table with these columns:
   | Layer | Component | What It Does | Input | Output | Key Traits |
   Identify the real internal components at each stage if known.

3. Provide this simple example and walk it through every layer above:
   {{EXAMPLE}}

4. For each layer, show:
   - The concrete transformation of the example at that stage (tokens, AST, bytecode, packets, logs, etc.)
   - An ASCII diagram or table if it helps visualize structure
   - What error would be caught here if something went wrong

5. An ASCII flow diagram connecting all layers: Input -> Layer 1 -> Layer 2 -> ... -> Output

6. A quick-reference table comparing different implementations/vendors if applicable.

7. 4-6 bullet-point key takeaways.

Rules:
- Use plain English. Define jargon on first use.
- Prefer tables and diagrams over long paragraphs.
- Use code blocks for all technical artifacts.
- Bold the first mention of any important concept.
- Keep each layer section under 250 words.
```

---

## How to Use

1. Replace `{{TOPIC}}` with your topic.  
   Example: *how the JavaScript engine executes code*

2. Replace `{{EXAMPLE}}` with a minimal code snippet, config, or command.  
   Example: a 5-line JS function

3. Paste into any AI assistant and run.

---

## Example Usage

```
Explain how the JavaScript engine executes code by breaking it down into sequential layers or stages.

Use this exact structure:
...

Provide this simple example and walk it through every layer above:
function add(a, b) { return a + b; }
const result = add(2, 3);
console.log(result);
```

---

## Ready-Made Examples

| If you want to learn about... | Use this topic | Use this example |
|------------------------------|----------------|------------------|
| JS Engine | how the JavaScript V8 engine executes code | `function add(a,b){return a+b;} add(2,3);` |
| SQL Execution | how PostgreSQL executes a SQL query | `SELECT name FROM users WHERE age > 25;` |
| Docker Build | how Docker builds an image from a Dockerfile | A 4-line Dockerfile |
| React Rendering | how React reconciles and renders the DOM | A small component with state |
| HTTPS Handshake | how a browser establishes a secure HTTPS connection | A `curl -v https://example.com` flow |

---

Save the AI's response as: `{{topic}}-layers.md`
