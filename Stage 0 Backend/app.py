from flask import Flask, jsonify
import requests
from datetime import datetime, timezone
import os

app = Flask(__name__)

@app.route("/me", methods=["GET"])
def get_profile():
    try:
        res = requests.get("https://catfact.ninja/fact", timeout=5)
        fact = res.json().get("fact", "No cat fact available.")
    except Exception:
        fact = "Could not fetch a cat fact at this time."

    timestamp = datetime.now(timezone.utc).isoformat()

    return jsonify({
        "status": "success",
        "user": {
            "email": "zainabakinola2010@gmail.com",
            "name": "Zainab Akinola",
            "stack": "Python/Flask"
        },
        "timestamp": timestamp,
        "fact": fact
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    app.run(host="0.0.0.0", port=port)
