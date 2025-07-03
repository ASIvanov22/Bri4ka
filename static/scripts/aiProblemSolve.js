function getAIResponse() {
    const input = document.getElementById("userInput").value.trim();
    const responseBox = document.getElementById("responseBox");
  
    if (!input) {
      responseBox.innerHTML = "Please describe your car issue.";
      responseBox.classList.remove("hidden");
      return;
    }
  
    // Simulated AI response (replace with actual AI call)
    const dummyResponse = `Possible solution: Check your engine oil level and make sure there's no leak. If the issue persists, it might be worth visiting a certified mechanic.`;
  
    // Show response
    responseBox.innerHTML = `<strong>Your problem:</strong> ${input}<br><br><strong>AI Suggestion:</strong> ${dummyResponse}`;
    responseBox.classList.remove("hidden");
  }
  