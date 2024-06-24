document.addEventListener("DOMContentLoaded", function() {
    const expertiseElement = document.getElementById("expertise-typing");
    
    function typeExpertise() {
        expertiseElement.classList.remove("fade-out");
        expertiseElement.style.width = '0';
        expertiseElement.style.animation = "none";
        
        setTimeout(() => {
            expertiseElement.style.visibility = "visible";
            expertiseElement.style.animation = "typing 4s steps(20, end) infinite, blink-caret 0.75s step-end infinite";
        }, 20); // Short delay to reset animation
    }
    
    // Initial call to start typing effect
    typeExpertise();
    
    expertiseElement.addEventListener("animationiteration", function() {
        expertiseElement.classList.add("fade-out");
        setTimeout(typeExpertise, 3000);
    });
});
