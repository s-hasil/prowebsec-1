// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close menu when clicking a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
}

// Navbar scroll effect
const navbar = document.querySelector(".navbar")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)"
  } else {
    navbar.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Create floating particles
const particlesContainer = document.getElementById("particles")

if (particlesContainer) {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 6 + "s"
    particle.style.animationDuration = Math.random() * 4 + 4 + "s"
    particlesContainer.appendChild(particle)
  }
}

// Form submission handling
const contactForm = document.getElementById("contact-form")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Show success message (replace with actual form submission logic)
    alert("Thank you for your message! We will get back to you soon.")
    contactForm.reset()

    // Here you can integrate EmailJS or any backend service
    // Example for EmailJS:
    // emailjs.sendForm('service_id', 'template_id', contactForm)
    //   .then(() => alert('Message sent successfully!'))
    //   .catch((error) => alert('Failed to send message.'));
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document
  .querySelectorAll(".feature-card, .service-card, .value-card, .pricing-card, .process-step, .maintenance-card")
  .forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease"
    observer.observe(el)
  })

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

