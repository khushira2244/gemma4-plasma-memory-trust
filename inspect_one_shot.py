import zipfile

outer_zip = "data.part1.zip"
target_inner = "stage_upload/11766.zarr.zip"

with zipfile.ZipFile(outer_zip, "r") as outer:
    print("Checking inner file exists...")
    if target_inner not in outer.namelist():
        print("Inner file not found:", target_inner)
        raise SystemExit

    # Read the inner zipped shot into memory
    inner_bytes = outer.read(target_inner)

import io
with zipfile.ZipFile(io.BytesIO(inner_bytes), "r") as inner:
    names = inner.namelist()
    print(f"Total entries inside {target_inner}: {len(names)}")
    print("\n--- First 200 entries ---")
    for name in names[:200]:
        print(name)