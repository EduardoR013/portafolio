// Muestra más información en las tarjetas de proyecto
function verMas(nombreProyecto) {
  const mensaje = `🔍 Más información sobre: ${nombreProyecto}\n\nEste espacio puede mostrar una galería, descripción completa o enlaces.`;
  alert(mensaje);
}

// Animación suave al hacer clic en enlaces del nav
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Confirmación al enviar formulario
document
  .getElementById("formulario-contacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("📩 Gracias por tu mensaje. Te responderé pronto.");
    this.reset(); // Limpia el formulario
  });

// Efecto de sombra al pasar el mouse sobre tarjetas
document.querySelectorAll(".tarjeta").forEach((tarjeta) => {
  tarjeta.addEventListener("mouseenter", () => {
    tarjeta.style.transform = "translateY(-5px)";
    tarjeta.style.boxShadow = "0 8px 20px rgba(63, 179, 255, 0.4)";
  });
  tarjeta.addEventListener("mouseleave", () => {
    tarjeta.style.transform = "translateY(0)";
    tarjeta.style.boxShadow = "0 4px 8px rgba(63, 179, 255, 0.2)";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario-contacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const from_name = document.getElementById("from_name").value;
    const from_email = document.getElementById("from_email").value;
    const message = document.getElementById("message").value;
    const time = new Date().toLocaleString();

    // Objeto con los datos a enviar
    const templateParams = {
      from_name,
      from_email,
      message,
      time,
    };

    // Enviar usando EmailJS
    emailjs.send("service_cbsj3wk", "template_djhy9hk", templateParams).then(
      () => {
        mostrarAlerta("¡Mensaje enviado correctamente!", "exito");
        form.reset();
      },
      (error) => {
        console.error("Error:", error);
        mostrarAlerta("Hubo un error al enviar el mensaje.", "error");
      }
    );
  });
});

function mostrarAlerta(mensaje, tipo) {
  const alerta = document.createElement("div");
  alerta.textContent = mensaje;
  alerta.style.padding = "1rem";
  alerta.style.marginTop = "1rem";
  alerta.style.borderRadius = "5px";
  alerta.style.fontWeight = "bold";

  if (tipo === "error") {
    alerta.style.backgroundColor = "#ffcccc";
    alerta.style.color = "#900";
  } else {
    alerta.style.backgroundColor = "#d4edda";
    alerta.style.color = "#155724";
  }

  const form = document.getElementById("formulario-contacto");
  const existente = document.querySelector(".alerta");
  if (existente) existente.remove();
  alerta.classList.add("alerta");
  form.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 4000);
}

document.getElementById("abrir-cv").addEventListener("click", function () {
  window.open("documents/CV_2025.pdf", "_blank");
});
