# 🧠 ValorixAI Vision Prompt GPT – Setup Template

## 1. 🧠 General Info

- **Tool Name:** ValorixAI Vision Prompt GPT
- **Target Audience/Niche:** Creators, designers, marketers, AI artists
- **What the prompt will generate:** 
  - [x] Image prompt (Markdown optimized)
  - [x] Structured visual parameters
  - [x] Style and context configurations
  - [x] Optional: Pro-level creative modifiers

---

## 2. 🛠️ Required Inputs (Blocco Base – Livello 1)

| Field Name       | Input Type         | Placeholder / Example              | Notes                           |
|------------------|--------------------|------------------------------------|----------------------------------|
| subject           | text               | "A woman walking in a cyber city"  | Required                         |
| visualStyle       | dropdown           | "Cyberpunk, Anime, Realistic..."   | Required                         |
| composition       | dropdown           | "Panoramic, Close-up, Isometric..."| Required                         |
| lighting          | dropdown           | "Neon, Natural, Cinematic..."      | Required                         |
| mood              | dropdown           | "Mysterious, Peaceful, Energetic..."| Required                      |
| colorPalette      | dropdown (optional)| "Neon blue and violet"             | Optional                         |
| context           | text (optional)    | "A futuristic Asian metropolis"    | Optional                         |
| format            | dropdown           | "16:9, Square, Vertical..."        | Required                         |

---

## 3. 🌳 Decision Tree Logic (Advanced and Creative Levels)

```yaml
advanced:
  additionalElements: text
  cameraAngle: dropdown
  lightingMood: dropdown
  texture: dropdown
  detailLevel: dropdown
  technique: dropdown
  quality: dropdown
  negativePrompt: text

creativeBoost:
  surrealEffects:
    - "Morfismo & Fusione"
    - "Maschere surreali"
    - "Invisibilità / Fantasma"
    - "Simbolismo nascosto"
  specialLights:
    - "Luce ultravioletta"
    - "Fluorescenza"
    - "Light painting"
    - "Anomalie cromatiche"
    - "Spazio negativo creativo"
  rareTextures:
    - "Cristallizzazione"
    - "Effetto pergamena"
    - "Fusione ghiaccio/metallo"
  narrativeContext:
    - "Epoca storica"
    - "Influenza culturale"
    - "Fonte di ispirazione"
    - "Elemento narrativo (storytelling)"
```

---

## 4. 🎯 Modalità e Logiche Attivabili

- Base: sempre visibile
- Avanzato: toggle “Controllo avanzato”
- Boost Creativo Pro: visibile solo in modalità PRO

---

## 5. ✍️ Prompt Blueprint – Output Finale

```text
Crea un'immagine di {subject}, in stile {visualStyle}, con composizione {composition}, illuminazione {lighting} e atmosfera {mood}.
Palette: {colorPalette}. Ambientazione: {context}. Formato: {format}.
Dettagli: {additionalElements}, Angolo: {cameraAngle}, Texture: {texture}, Tecnica: {technique}, Qualità: {quality}.
Effetti creativi: {surrealEffects}, {specialLights}, {rareTextures}, {narrativeContext}.
Prompt negativo: {negativePrompt}.
```

---

## 6. 🧩 Extra Controlli

- Selezione multipla per Boost Creativo
- Valori predefiniti per utenti rapidi
- Modalità scura e chiara supportata
- Output ottimizzato per ChatGPT Vision
