document.addEventListener('DOMContentLoaded', () => {
    // Select all letter cards
    const letters = document.querySelectorAll('.letter-card');

    // Loop through each letter card to add click event
    letters.forEach(letter => {
        letter.addEventListener('click', () => {
            // Toggle content visibility
            const content = letter.querySelector('.letter-content');
            if (content.style.maxHeight) {
                // Close if already open
                content.style.maxHeight = null;
                content.style.opacity = 0;
            } else {
                // Open to reveal content
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = 1;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const proposalButton = document.querySelector('.proposal-btn');
    const proposalSection = document.querySelector('.proposal');

    if (proposalButton && proposalSection) {
        proposalButton.addEventListener('click', () => {
            proposalSection.style.display = 'block'; // Show the proposal section
        });
    }
});
