# 🌟 Creative Seller Prompt Builder Setup Template

## 1. 🧠 General Info

- **Tool Name:** 
- **Target Audience/Niche:** 
- **What the prompt will generate:** 
  - [ ] Title
  - [ ] Description
  - [ ] Tags
  - [ ] Other: ___

---

## 2. 🛠️ Required Inputs (Always visible)

List all input fields necessary for the user.

| Field Name        | Input Type         | Placeholder / Example               | Notes                       |
|------------------|--------------------|-------------------------------------|-----------------------------|
| product_name      | text               | "Handmade silver ring"              | Required                    |
| tone              | dropdown (5 values)| "Creative, Formal, Minimal..."      | Required                    |
| category          | dropdown + custom  | "Jewelry, Decor, Other"             | Triggers sub-branches       |
| ...               | ...                | ...                                 | ...                         |

---

## 3. 🌳 Decision Tree Logic (Conditional Fields)

Describe dynamic logic here. Add as many branches as needed.

```yaml
category:
  Jewelry:
    - subcategory: ["Rings", "Necklaces", "Bracelets"]
    - material: ["Gold", "Silver", "Other"]
  Digital Product:
    - digital_type: ["Printable Wall Art", "Ebook", "Preset"]
    - software_required: text
```

---

## 4. 🎯 Custom Rules / Niche-Specific Logic

- If `tone = Creative`, favor adjectives like "vibrant", "expressive"
- If `category = Photography`, suggest including image resolution and style
- If `digital_type = Preset`, ask for software compatibility

---

## 5. ✍️ Prompt Blueprint (Optional)

Define how the prompt should be generated using selected inputs.

```text
"Generate a {tone} product description for a {material} {product_name} in the {category} category, ideal for {occasion}. Include relevant keywords: {keywords}"
```

---

## 6. 🧩 Extras (optional but useful)

- Keywords to emphasize
- Language or tone restrictions
- User guidance or tips
