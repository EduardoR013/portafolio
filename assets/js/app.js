// Muestra más información en las tarjetas de proyecto
function verMas(nombreProyecto) {
  const mensaje = `🔍 Más información sobre: ${nombreProyecto}\n\nEste espacio puede mostrar una galería, descripción completa o enlaces.`;
  alert(mensaje);
}

// Animación suave al hacer clic en enlaces del nav
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Confirmación al enviar formulario
document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("📩 Gracias por tu mensaje. Te responderé pronto.");
  this.reset(); // Limpia el formulario
});

// Efecto de sombra al pasar el mouse sobre tarjetas
document.querySelectorAll(".tarjeta").forEach(tarjeta => {
  tarjeta.addEventListener("mouseenter", () => {
    tarjeta.style.transform = "translateY(-5px)";
    tarjeta.style.boxShadow = "0 8px 20px rgba(63, 179, 255, 0.4)";
  });
  tarjeta.addEventListener("mouseleave", () => {
    tarjeta.style.transform = "translateY(0)";
    tarjeta.style.boxShadow = "0 4px 8px rgba(63, 179, 255, 0.2)";
  });
});

// Cambio de color del navbar al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#0d1b32";
  } else {
    header.style.backgroundColor = "var(--azul-medio)";
  }
});
