can you give whole things in markdown please, this is last thing 
# Gemma4 Plasma Memory Trust

<img width="923" height="464" alt="image" src="https://github.com/user-attachments/assets/444d31a0-05eb-4eb1-af1b-5a6bca141258" />

A real-data trust layer for plasma trajectory reasoning in fusion research.

Plasma Memory Trust shows why **state similarity alone can mislead** when comparing risky plasma events, and why **trajectory direction** must also be verified before reuse. The system combines real tokamak shot comparisons, structured trust logic, and **Gemma 4** as the final scientist-facing explanation layer.

---

## Live Links

- **Live Demo:** [gemma4-plasma-memory-trust.netlify.app](https://gemma4-plasma-memory-trust.netlify.app/)
- **Kaggle Writeup:** [Gemma 4 Plasma Memory Trust Writeup](https://www.kaggle.com/competitions/gemma-4-good-hackathon/writeups/gemma-4-plasma-memory-trust)
- **Demo Video:** [Watch on YouTube](https://www.youtube.com/watch?v=40Ef__5901o)

---

## Core Workflow

1. **Real tokamak shot data**
2. **Plasma Memory Analyst** computes state similarity and trajectory direction
3. **Case Selector** picks the most relevant structured comparison
4. **Verifier** checks whether the label is actually supported by the evidence
5. **Gemma 4 Trust Reporter** explains the verified result in a grounded, scientist-facing way

---

## Key Result

The current prototype shows three real outcomes:

- **misleading state-only match**
- **partial / uncertain**
- **reject**

**Main finding:** state similarity alone is not enough for trustworthy plasma-risk comparison.

---

## Tech Stack

- **Frontend:** React + Vite
- **Analysis pipeline:** Python
- **Data:** real tokamak shot comparisons
- **Explanation layer:** Gemma 4

---

## How to Run

### Frontend
## How to Run

### Frontend

The landing page frontend is inside the `Frontend/` folder.

```bash
cd Frontend
npm install
npm run dev
```

This starts the local React + Vite development server.

To create a production build:

```bash
cd Frontend
npm install
npm run build
```

---

## Notebook / Plasma Analysis

The repository also includes notebook-based plasma analysis and supporting Python scripts.

Create and activate a Python virtual environment.

### Linux / macOS

```bash
python -m venv .venv
source .venv/bin/activate
```

### Windows PowerShell

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

If you have a `requirements.txt` file, install dependencies with:

```bash
pip install -r requirements.txt
```

If you do not have a `requirements.txt` file yet, install the commonly used packages manually:

```bash
pip install jupyter numpy pandas matplotlib requests python-dotenv
```

Then launch Jupyter:

```bash
jupyter notebook
```

Open the relevant notebook files, such as:

- `plasma.ipynb`
- `plasma_working.ipynb`

These notebooks contain the real-shot feasibility analysis, plasma comparison workflow, and supporting experimentation for the project.

---

## Repository Notes

- `Frontend/` contains the landing page and demo interface.
- `src/` contains Python scripts for case selection, verification, and Gemma reporting.
- `demo/` contains selected outputs and demo-related artifacts.
- Notebook files contain the plasma analysis workflow and feasibility study.

---

## Future Direction

<p align="center">
  <img width="638" height="359" alt="Project future direction" src="https://github.com/user-attachments/assets/c452a640-9b33-4e6b-9657-21039e29312e" />
</p>

The next step is to expand the plasma memory bank, add richer diagnostics, improve expert validation and threshold calibration, and build a stronger scientist-facing plasma decision-support assistant.

<p align="center">
  <i>Made with ❤️ for scientists, safer reasoning, and the future of clean energy.</i>
</p>
