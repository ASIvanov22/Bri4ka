from flask import Flask, request, jsonify, render_template
import requests
import json
from dotenv import load_dotenv
import os
 
app = Flask(__name__)
 
load_dotenv()
 
api_key = os.getenv("API_KEY")
 
url = f"https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key={api_key}"
 
headers = {
    "Content-Type": "application/json"
}
 
@app.route('/ask_car_question', methods=['POST'])
def ask_car_question():
    data = request.json
    question = data.get("question", "").strip()
 
    car_keywords = ["car", "vehicle", "automobile", "engine", "tire", "brake", "transmission"]
    if not any(keyword in question.lower() for keyword in car_keywords):
        return jsonify({"error": "This endpoint only answers car-related questions."}), 400
 
    gemini_data = {
        "contents": [
            {
                "parts": [
                    {
                        "text": question
                    }
                ]
            }
        ]
    }
 
    response = requests.post(url, headers=headers, json=gemini_data)
 
    if response.status_code == 200:
        result = response.json()
        try:
            answer = result["candidates"][0]["content"]["parts"][0]["text"]
            return jsonify({"answer": answer})
        except KeyError:
            return jsonify({"error": "Unexpected response format from Gemini API."}), 500
    else:
        return jsonify({"error": f"Gemini API error: {response.status_code}", "details": response.text}), 500
 
@app.route('/')
def index():
    return render_template("index.html")
 
@app.route('/our_story')
def our_story():
    return render_template("pages/ourStory.html")
 
@app.route('/common_questions')
def common_questions():
    return render_template("pages/commonQuestions.html")
 
@app.route('/ai_problem_solve')
def ai_problem_solve():
    return render_template("pages/aiProblemSolve.html")
 
if __name__ == '__main__':
    app.run(debug=True)