
const unblurPage = () => {
    // Target the specific paywall and blur classes found in the HTML
    const blurredElements = document.querySelectorAll('._blurred-content_tltpv_9, ._overlay_tltpv_16');

    blurredElements.forEach(el => {
        // Remove blur filters
        el.style.filter = 'none';
        el.style.backdropFilter = 'none';
        
        // If it's the overlay, hide it entirely
        if (el.classList.contains('_overlay_tltpv_16')) {
            el.style.display = 'none';
        }

        // Ensure opacity is full
        el.style.opacity = '1';
    });

    // Force visibility on the parent container if it's restricted
    const containers = document.querySelectorAll('._container_tltpv_1');
    containers.forEach(container => {
        container.style.display = 'block';
    });
};

// Run immediately
unblurPage();

// Observe for dynamic content loading (important for single-page apps)
const observer = new MutationObserver((mutations) => {
    unblurPage();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log("StudocuAI Unblur: Targeting paywall classes...");