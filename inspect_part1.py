import zipfile

fname = "data.part1.zip"

keywords = [
    "task_4-5",
    "mirnov",
    "magnetics",
    "summary-ip",
    "interferometer",
    "soft_x_rays",
    "zarr",
]

with zipfile.ZipFile(fname, "r") as z:
    names = z.namelist()
    hits = [n for n in names if any(k in n.lower() for k in keywords)]

    print(f"Total files: {len(names)}")
    print(f"Matches: {len(hits)}")
    print("\n--- Matching files ---")
    for h in hits[:300]:
        print(h)