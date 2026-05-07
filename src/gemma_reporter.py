import json
import os
from pathlib import Path
from typing import Any, Dict

import requests
from dotenv import load_dotenv


ROOT = Path(__file__).resolve().parent.parent
PROMPT_PATH = ROOT / "prompts" / "gemma_report_prompt.txt"
INPUT_PATH = ROOT / "demo" / "verified_case.json"
OUTPUT_PATH = ROOT / "demo" / "reporter_output_case_1.md"


def load_text(path: Path) -> str:
    if not path.exists():
        raise FileNotFoundError(f"File not found: {path}")
    return path.read_text(encoding="utf-8")


def load_json(path: Path) -> Dict[str, Any]:
    if not path.exists():
        raise FileNotFoundError(f"File not found: {path}")
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def build_user_payload(case: Dict[str, Any]) -> str:
    return json.dumps(case, indent=2)


def call_gemma_api(
    system_prompt: str,
    case_payload: str,
    api_url: str,
    api_key: str,
    model_name: str,
    timeout: int = 60,
) -> str:
    """
    Generic OpenAI-compatible chat endpoint call.
    Configure these in .env:
    - GEMMA_API_URL
    - GEMMA_API_KEY
    - GEMMA_MODEL
    """
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    body = {
        "model": model_name,
        "messages": [
            {"role": "system", "content": system_prompt},
            {
                "role": "user",
                "content": (
                    "Use the following verified plasma-risk case and produce the requested report.\n\n"
                    f"{case_payload}"
                ),
            },
        ],
        "temperature": 0.2,
    }

    response = requests.post(api_url, headers=headers, json=body, timeout=timeout)
    response.raise_for_status()
    data = response.json()

    try:
        return data["choices"][0]["message"]["content"].strip()
    except (KeyError, IndexError, TypeError) as e:
        raise ValueError(f"Unexpected API response format: {data}") from e


def save_output(text: str, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def main() -> None:
    load_dotenv(ROOT / ".env")

    api_key = os.getenv("GEMMA_API_KEY")
    api_url = os.getenv("GEMMA_API_URL")
    model_name = os.getenv("GEMMA_MODEL")

    if not api_key:
        raise ValueError("Missing GEMMA_API_KEY in .env")
    if not api_url:
        raise ValueError("Missing GEMMA_API_URL in .env")
    if not model_name:
        raise ValueError("Missing GEMMA_MODEL in .env")

    system_prompt = load_text(PROMPT_PATH)
    verified_case = load_json(INPUT_PATH)
    case_payload = build_user_payload(verified_case)

    report = call_gemma_api(
        system_prompt=system_prompt,
        case_payload=case_payload,
        api_url=api_url,
        api_key=api_key,
        model_name=model_name,
    )

    save_output(report, OUTPUT_PATH)

    print("Gemma report generated successfully.")
    print(f"Saved to: {OUTPUT_PATH}")
    print("\n--- Report Preview ---\n")
    print(report)


if __name__ == "__main__":
    main()