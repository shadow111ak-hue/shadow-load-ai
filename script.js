const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const messages = document.getElementById("messages");

function addMessage(text, sender) {
    const message = document.createElement("div");

    message.className = sender;

    message.style.margin = "12px 0";
    message.style.padding = "12px";
    message.style.borderRadius = "10px";

    if (sender === "user") {
        message.style.background = "#238636";
        message.style.textAlign = "right";
    } else {
        message.style.background = "#21262d";
    }

    message.textContent = text;

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener("click", () => {

    const text = userInput.value.trim();

    if (!text) return;

    addMessage(text, "user");

    userInput.value = "";

    setTimeout(() => {

        addMessage("👨‍🍳 AI Cooking is under development. Soon I'll answer your cooking questions!", "ai");

    }, 700);

});
