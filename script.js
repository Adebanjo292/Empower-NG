// JavaScript for Oyebanji Group of Companies

// Highlight current page in navigation
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("nav ul li a");
    navItems.forEach((item) => {
      if (item.href === window.location.href) {
        item.classList.add("current");
      }
    });
  });
  
  // Smooth scroll to sections when clicking links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Subscribe to Newsletter - simple form validation
  document.querySelector("#newsletter form").addEventListener("submit", function (e) {
    const emailInput = document.querySelector("#newsletter input[type='email']");
    if (!emailInput.value.includes("@")) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for subscribing!");
    }
  });
  
  // Get A Quote - form submission
  document.querySelector(".quote button").addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.querySelector(".quote input[type='text']").value;
    const email = document.querySelector(".quote input[type='email']").value;
    const message = document.querySelector(".quote textarea").value;
  
    if (name && email.includes("@") && message) {
      alert("Thank you for reaching out, " + name + "! We will contact you shortly.");
    } else {
      alert("Please fill out all fields with a valid email.");
    }
  });
  
  // Toggle "dark" theme for footer
  document.querySelector("footer").addEventListener("dblclick", function () {
    this.classList.toggle("dark");
    this.style.transition = "background-color 0.3s";
  });
  
  // Hover effect on boxes
  document.querySelectorAll("#boxes .box").forEach(box => {
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "#e6e6e6";
      box.style.transform = "scale(1.05)";
      box.style.transition = "transform 0.3s";
    });
    box.addEventListener("mouseleave", () => {
      box.style.backgroundColor = "";
      box.style.transform = "scale(1)";
    });
  });

  document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.elements[0].value;
    alert(`Thank you for subscribing with the email: ${email}`);
    event.target.reset(); // Reset the form
});
