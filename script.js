document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} Your Name`;
});
