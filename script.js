function showMessage(message, color) {
  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = message;
  formMessage.style.color = color;
}

// Dark Mode
const darkBtn = document.getElementById("darkToggle");

darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
});

window.addEventListener("load", function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    showMessage("All fields are required!", "red");
    return;
  }

  if (!email.includes("@")) {
    showMessage("Enter a valid email!", "red");
    return;
  }

  if (message.length < 10) {
    showMessage("Message must be at least 10 characters!", "red");
    return;
  }

  showMessage("Message sent successfully!", "green");
  this.reset();
});

// Show/Hide Skills
const toggleSkillsBtn = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skills");

toggleSkillsBtn.addEventListener("click", function () {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
    this.textContent = "Hide Skills";
  } else {
    skillsSection.style.display = "none";
    this.textContent = "Show Skills";
  }
});

// To-Do List
document.getElementById("addTask").addEventListener("click", function () {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.remove();
  });

  document.getElementById("todoList").appendChild(li);
  input.value = "";
});