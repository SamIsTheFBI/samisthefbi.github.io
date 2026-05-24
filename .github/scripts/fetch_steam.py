import re
import json
import urllib.request
import sys
import os

PROFILE_URL = "https://steamcommunity.com/id/samisthefbi/"
FALLBACK_URL = PROFILE_URL
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "../../public/steam-data.json")

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}


def load_existing():
    try:
        with open(OUTPUT_PATH) as f:
            return json.load(f)
    except Exception:
        return {"name": "unknown", "steam_store_url": FALLBACK_URL}


def fetch_page(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode("utf-8")


def extract_recent_game(html):
    match = re.search(
        r'class="game_name"[^>]*>.*?'
        r'href="https://steamcommunity\.com/app/(\d+)"[^>]*>'
        r'\s*([^<]+?)\s*</a>',
        html,
        re.DOTALL,
    )
    if match:
        app_id = match.group(1)
        game_name = match.group(2).strip()
        return {
            "name": game_name,
            "steam_store_url": f"https://store.steampowered.com/app/{app_id}",
        }
    return None


def main():
    try:
        html = fetch_page(PROFILE_URL)
    except Exception as e:
        print(f"Fetch failed: {e}", file=sys.stderr)
        result = load_existing()
        print(f"Keeping existing: {result['name']}")
        sys.exit(0)

    result = extract_recent_game(html)
    if not result:
        print("Could not parse recent game from page", file=sys.stderr)
        result = load_existing()
        print(f"Keeping existing: {result['name']}")
    else:
        print(f"Found: {result['name']}")

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w") as f:
        json.dump(result, f, indent=2)
        f.write("\n")


if __name__ == "__main__":
    main()
