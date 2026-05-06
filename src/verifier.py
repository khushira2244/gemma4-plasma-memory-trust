import json
import os
from typing import Any, Dict


Case = Dict[str, Any]


def load_case(path: str) -> Case:
    if not os.path.exists(path):
        raise FileNotFoundError(f"Selected case file not found: {path}")

    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    if not isinstance(data, dict):
        raise ValueError("Expected a single selected case as a JSON object.")

    return data


def verify_case(case: Case) -> Case:
    state_similarity = float(case.get("state_similarity", 0.0))
    direction_similarity = float(case.get("direction_similarity", 0.0))
    combined_score = float(case.get("combined_score", 0.0))
    given_label = str(case.get("final_label", "")).strip().lower()

    if direction_similarity < -0.5:
        expected_label = "misleading state-only match"
        verified = given_label == expected_label
        note = (
            "moderate or strong state resemblance is overridden by strongly opposing "
            "approach direction"
        )
    elif combined_score > 0.5:
        expected_label = "strong match"
        verified = given_label == expected_label
        note = "state and direction are both sufficiently compatible"
    elif combined_score > 0.2:
        expected_label = "partial / uncertain"
        verified = given_label == expected_label
        note = (
            "state resemblance exists, but direction compatibility is not strong enough "
            "for a confident reusable match"
        )
    else:
        expected_label = "reject"
        verified = given_label == expected_label
        note = "insufficient similarity for a reusable failure-memory match"

    verified_case = dict(case)
    verified_case["verified"] = verified
    verified_case["expected_label"] = expected_label
    verified_case["verification_note"] = note

    return verified_case


def save_verified_case(case: Case, output_path: str) -> None:
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(case, f, indent=2)


def main() -> None:
    input_path = "demo/selected_case.json"
    output_path = "demo/verified_case.json"

    selected_case = load_case(input_path)
    verified_case = verify_case(selected_case)
    save_verified_case(verified_case, output_path)

    print(json.dumps(verified_case, indent=2))
    print(f"Saved verified case to: {output_path}")


if __name__ == "__main__":
    main()