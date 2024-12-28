

document.addEventListener('DOMContentLoaded', () => {
    const parentContainer = document.querySelector('.card-container');

    parentContainer.addEventListener('click', (event) => {
        const current = event.target;

        
        if (!current.classList.contains('read-more-btn')) return;

        
        const currentText = current.closest('.content').querySelector('.read-more-text');

        
        currentText.classList.toggle('read-more-text--show');

        
        current.textContent = current.textContent.includes('Read More') 
            ? "Read Less..." 
            : "Read More...";
    });
});
