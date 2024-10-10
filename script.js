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