/* ================= MENU HAMBURGUESA ================= */

const toggle = document.getElementById("menu-toggle");
const overlay = document.getElementById("menu-overlay");
const sound = document.getElementById("clickSound");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");

  sound.currentTime = 0;
  sound.play();
});

/* cerrar al hacer click en link */
document.querySelectorAll(".menu-overlay a").forEach(link=>{
  link.addEventListener("click", ()=>{
    toggle.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});



/* ================= ANIMACION SERVICES ================= */

const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "0.8s ease";
    }
  });
},{
  threshold:0.2
});

cards.forEach(card => {
  observer.observe(card);
});


/* ================= HORARIOS ================= */

const buttons = document.querySelectorAll(".day-btn");
const days = document.querySelectorAll(".schedule-day");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    // quitar active
    buttons.forEach(btn => btn.classList.remove("active"));
    days.forEach(day => day.classList.remove("active"));

    // activar botón
    button.classList.add("active");

    // mostrar día
    const selectedDay = button.getAttribute("data-day");
    document.getElementById(selectedDay).classList.add("active");

  });
});


/* ================= SCROLL SUAVE ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});


/* ================= EFECTO HEADER ================= */

window.addEventListener("scroll", () => {
  const header = document.querySelector(".encabezado");

  if(window.scrollY > 50){
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.6)";
  } else {
    header.style.boxShadow = "none";
  }
});
