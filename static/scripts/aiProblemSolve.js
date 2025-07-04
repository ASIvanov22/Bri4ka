document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const responseBox = document.getElementById("responseBox");
    const userInput = document.getElementById("userInput");

    // Create loading animation element
    const loadingSpinner = document.createElement("div");
    loadingSpinner.className = "loading-spinner";
    loadingSpinner.innerHTML = `<span class="spinner"></span> Loading...`;
    loadingSpinner.style.display = "none";
    responseBox.parentNode.insertBefore(loadingSpinner, responseBox);

    button.addEventListener("click", async () => {
      const question = userInput.value.trim();

      if (!question) {
        responseBox.textContent = "Please enter a car issue.";
        responseBox.classList.remove("hidden");
        return;
      }

      // Show loading, disable button
      loadingSpinner.style.display = "block";
      button.disabled = true;
      responseBox.classList.add("hidden");

      try {
        const response = await fetch("/ask_car_question", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question }),
        });

        if (response.ok) {
          const data = await response.json();
          responseBox.innerHTML = data.answer || "No answer received.";
        } else {
          const errorData = await response.json();
          responseBox.textContent = errorData.error || "An error occurred.";
        }
      } catch (error) {
        responseBox.textContent = "Failed to connect to the server.";
      }

      // Hide loading, enable button
      loadingSpinner.style.display = "none";
      button.disabled = false;
      responseBox.classList.remove("hidden");
    });
  });

// Add CSS for spinner
const style = document.createElement('style');
style.innerHTML = `
.loading-spinner {
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: #333;
  font-size: 1em;
  margin: 1em 0;
}
.spinner {
  width: 1em;
  height: 1em;
  border: 2px solid #ccc;
  border-top: 2px solid #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  display: inline-block;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);