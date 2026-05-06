import json
import os
from typing import Any, Dict, List, Optional


Case = Dict[str, Any]


def load_cases(path: str) -> List[Case]:
    if not os.path.exists(path):
        raise FileNotFoundError(f"Cases file not found: {path}")

    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    if not isinstance(data, list):
        raise ValueError("Expected a list of cases in the JSON file.")

    return data


def confidence_rank(confidence: str) -> int:
    order = {
        "high": 3,
        "medium": 2,
        "low": 1
    }
    return order.get(str(confidence).lower(), 0)


def select_first_by_label(cases: List[Case], label: str) -> Optional[Case]:
    for case in cases:
        if case.get("final_label") == label:
            return case
    return None


def select_highest_confidence(cases: List[Case]) -> Optional[Case]:
    if not cases:
        return None

    ranked = sorted(
        cases,
        key=lambda c: (
            confidence_rank(c.get("confidence", "")),
            float(c.get("combined_score", 0.0))
        ),
        reverse=True
    )
    return ranked[0]


def select_case(cases: List[Case], mode: str = "misleading") -> Optional[Case]:
    mode = mode.strip().lower()

    if mode == "misleading":
        return select_first_by_label(cases, "misleading state-only match")
    if mode == "partial":
        return select_first_by_label(cases, "partial / uncertain")
    if mode == "reject":
        return select_first_by_label(cases, "reject")
    if mode == "highest_confidence":
        return select_highest_confidence(cases)

    raise ValueError(
        "Invalid mode. Use one of: misleading, partial, reject, highest_confidence"
    )


def save_selected_case(case: Case, output_path: str) -> None:
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(case, f, indent=2)


def main() -> None:
    input_path = "demo/real_cases.json"
    output_path = "demo/selected_case.json"

    # Change mode here when needed:
    # misleading | partial | reject | highest_confidence
    mode = "misleading"

    cases = load_cases(input_path)
    selected = select_case(cases, mode=mode)

    if selected is None:
        print(f"No case found for mode: {mode}")
        return

    save_selected_case(selected, output_path)

    print("Selected case mode:", mode)
    print(json.dumps(selected, indent=2))
    print(f"Saved selected case to: {output_path}")


if __name__ == "__main__":
    main()