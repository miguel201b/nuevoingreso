// Función para mostrar la sección seleccionada y ocultar las demás
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Función para alternar la visibilidad del menú de navegación
function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('active');
}

// Mostrar la sección de inicio al cargar la página
window.onload = function () {
    showSection('inicio');
};
