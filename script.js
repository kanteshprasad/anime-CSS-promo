

window.addEventListener("load", function() {
  
    var spinner = document.getElementById('spinner');
    var content = document.getElementById('content');
    
    if (spinner && content) {
        spinner.style.display = 'none';
        content.style.display = 'block';

    
        setTimeout(function() {
            var overlay = document.querySelector('.overlay');
            if (overlay) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 6000); 
    }
});




