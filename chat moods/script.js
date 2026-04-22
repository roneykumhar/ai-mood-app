function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;

  if (message === "") return;

  addMessage(message, "user");

  const mood = detectMood(message);
  const reply = generateReply(mood);

  setTimeout(() => {
    addMessage(reply, "bot");
  }, 500);

  input.value = "";
}

function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");

  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// 🧠 Simple Mood Detection (basic logic)
function detectMood(text) {
  text = text.toLowerCase();

  if (text.includes("sad") || text.includes("cry")) {
    return "sad";
  } else if (text.includes("happy") || text.includes("good")) {
    return "happy";
  } else if (text.includes("angry") || text.includes("mad")) {
    return "angry";
  } else {
    return "neutral";
  }
}

// 🤖 AI-like Response
function generateReply(mood) {
  switch (mood) {
    case "sad":
      return "I'm here for you 💙 Tell me what's wrong.";
    case "happy":
      return "That's awesome 😄 Keep smiling!";
    case "angry":
      return "Take a deep breath 😌 Everything will be okay.";
    default:
      return "Tell me more 🙂";
  }
}