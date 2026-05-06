import zipfile
import io

outer_zip = "data.part1.zip"
target_inner = "stage_upload/11766.zarr.zip"

keywords = [
    "b_field_tor_probe_cc_field",
    "b_field_pol_probe_omv_voltage",
    "soft_x_rays",
    "horizontal_cam_lower",
    "horizontal_cam_upper",
    "mirnov",
    "summary",
    "ip",
    "n_e_line",
    "power_nbi",
]

with zipfile.ZipFile(outer_zip, "r") as outer:
    inner_bytes = outer.read(target_inner)

with zipfile.ZipFile(io.BytesIO(inner_bytes), "r") as inner:
    names = inner.namelist()
    hits = [n for n in names if any(k.lower() in n.lower() for k in keywords)]

    print(f"Total entries: {len(names)}")
    print(f"Matches: {len(hits)}")
    print("\n--- Matching entries ---")
    for h in hits:
        print(h)