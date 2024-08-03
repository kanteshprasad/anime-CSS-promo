
// script.js

window.addEventListener("load", function() {
    // When the page is fully loaded, including all images and sub-resources
    var spinner = document.getElementById('spinner');
    var content = document.getElementById('content');
    
    if (spinner && content) {
        spinner.style.display = 'none';
        content.style.display = 'block';
    }
});




setTimeout(function() {
    var overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.parentNode.removeChild(overlay);
    }
}, 6000);



