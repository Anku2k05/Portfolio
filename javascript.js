function changeAboutMeText() {
    const aboutMeTexts = ["Tech Enthusiast", "Full Stack Web Developer"];
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
            // Typing
            aboutMeElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            // Erasing
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, erasingSpeed);
        } else {
            // Pause before switching
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}

changeAboutMeText();
