const form = document.getElementById("ticketForm");
const ticketSection = document.getElementById("ticketOutput");

const outputName = document.getElementById("outputName");
const outputEmail = document.getElementById("outputEmail");
const outputGithub = document.getElementById("outputGithub");
const avatarUpload = document.getElementById("avatarUpload");
const avatarPreview = document.getElementById("avatarPreview");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const github = document.getElementById("github").value.trim();

  // Validación mínima
  if (!fullName || !email || !github) {
    alert("Please fill in all fields.");
    return;
  }

  outputName.textContent = fullName;
  outputEmail.textContent = email;
  outputGithub.textContent = github;

  // Mostrar sección del ticket
  ticketSection.classList.remove("hidden");

  // Procesar imagen
  const file = avatarUpload.files[0];
  if (file) {
    if (file.size > 500 * 1024) {
      alert("The image is too large. Max size is 500KB.");
      avatarPreview.src = "#";
      avatarPreview.alt = "Invalid image";
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      avatarPreview.src = event.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    avatarPreview.src = "./assets/images/default-avatar.png"; // opcional: imagen por defecto
  }
});
