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
                "role": "user",
                "parts": [
                    {
                        "text": "You are a helpful car diagnostic assistant for the Bri4ka website. When given a user's car-related issue, diagnose the problem and provide a step-by-step solution. Your answer must be a clean, ready-to-render HTML snippet. Do not use any markdown, code blocks, or code fences. Only return the HTML content, starting with the first HTML tag and ending with the last. Use semantic HTML elements (like <h2>, <ul>, <li>, <p>, etc.) for clarity and accessibility. Here is the user's issue: " + question
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
            return jsonify({"error": "Unexpected response format from Gemini API.", "raw_response": result}), 500
    else:
        print("Gemini API error:", response.status_code, response.text)
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
 
@app.route('/contact_us')
def contact_us():
    return render_template("pages/contactUs.html")

@app.route('/ai_problem_solve')
def ai_problem_solve():
    return render_template("pages/aiProblemSolve.html")


if __name__ == '__main__':
    app.run(debug=True)