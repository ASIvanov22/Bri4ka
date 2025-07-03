document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const responseBox = document.getElementById("responseBox");
    const userInput = document.getElementById("userInput");
   
    button.addEventListener("click", async () => {
      const question = userInput.value.trim();
   
      if (!question) {
        responseBox.textContent = "Please enter a car issue.";
        responseBox.classList.remove("hidden");
        return;
      }
   
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
          responseBox.textContent = data.answer || "No answer received.";
        } else {
          const errorData = await response.json();
          responseBox.textContent = errorData.error || "An error occurred.";
        }
      } catch (error) {
        responseBox.textContent = "Failed to connect to the server.";
      }
   
      responseBox.classList.remove("hidden");
    });
  });