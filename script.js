setTimeout(function() {
    var overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.parentNode.removeChild(overlay);
    }
}, 6000);