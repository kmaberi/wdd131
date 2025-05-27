// Insert last-modified date into footer
document.getElementById('last-modified').textContent =
    new Date(document.lastModified).toLocaleString();

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");

    const loadImage = (img) => {
        img.src = img.dataset.src; // Replace placeholder with actual image
        img.onload = () => {
            img.classList.add("fade-in"); // Add fade-in effect
        };
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                loadImage(img);
                observer.unobserve(img); // Stop observing once loaded
            }
        });
    });

    images.forEach((img) => observer.observe(img));
});
