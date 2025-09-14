const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotIcon = document.getElementById("chatbot-icon");

const questions = [
  "Hello! How can I help you?",
  "What's your name?",
  "Which course/degree are you pursuing? (B.Tech, BBA, MBA, etc.)",
  "Which year are you in? (1st, 2nd, 3rd, 4th year)",
  "What is your specialization/major? (Computer Science, Marketing, Finance, etc.)",
  "Tell me a little about your skills and interests.",
  "Have you attached any relevant project work or a portfolio?",
  "Shall I check internship eligibility for you?",
  "Based on your profile, here are 5 internships that match your profile:\n1. AI/ML Intern \n2. Data Analytics Intern \n3. Web Development Intern \n4. Policy Research Intern \n5. Cybersecurity Intern",
  "Would you like a mock interview to practice?"
];

let questionIndex = 0;

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("chat-message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botAsk() {
  if (questionIndex < questions.length) {
    addMessage(questions[questionIndex], "bot");
  }
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;
  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    questionIndex++;
    botAsk();
  }, 800);
}

// toggle chatbot when icon clicked
document.getElementById("chatbot-icon").addEventListener("click", () => {
  chatbotWindow.style.display = "flex";
  chatBox.innerHTML = ""; // reset chat
  questionIndex = 0;
  botAsk();
});
