function showAlert(message) {window.onload = function () {alert(message);};}
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
function showAlert(message) {window.onload = function () {alert(message);};}
// Função para abrir e fechar o menu lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0'; // Abre o menu
    } else {
        sidebar.style.left = '-250px'; // Fecha o menu
    }
}
function showTime() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent =  `Hora: 
    ${hours}:${minutes}:${seconds}`;
}
setInterval(showTime, 1000);
