document.addEventListener("DOMContentLoaded", () => {
    console.log("Page fully loaded and scripts ready!");
  });
  
  document.querySelector('.subscribe-btn').addEventListener('click', function () {
    const email = document.querySelector('.email-input').value;
    if (email === '') {
      alert('Por favor, ingresa tu correo electrónico.');
    } else {
      alert('¡Gracias por suscribirte!');
    }
  });
  

  // Redireccionar al enlace de WhatsApp
document.getElementById('whatsapp-btn').addEventListener('click', () => {
  const phoneNumber = '3123304140';  // Número WhatsApp Business en formato internacional
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, '_blank');  // Abre en una nueva pestaña
});

