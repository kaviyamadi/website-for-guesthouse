// Contact form submission (demo only)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! We will contact you shortly.");
      form.reset();
    });
  }
});
