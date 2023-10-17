const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const authenticated = authentication(username, password);

  if (authenticated) {
    alert("Login successful!");
    // Redirect to another page or perform other actions upon successful login
    window.location.href = "login.html";
  } else {
    alert("Wrong username or password.");
  }
});

function authentication(username, password) {
  // Replace this with your actual authentication logic
  // For demonstration purposes, always return true
  return true;
}
