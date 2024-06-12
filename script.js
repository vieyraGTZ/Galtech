document.addEventListener('DOMContentLoaded', function() {
    var botonSubir = document.getElementById('button-up');
    botonSubir.addEventListener('click', function() {
        // Hace que la página se desplace hacia arriba suavemente
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



document.querySelectorAll('.air-images-box img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('zoomedImg').src = this.src;
        document.getElementById('zoomedImage').style.display = 'flex';
    });
});

document.getElementById('closeZoom').addEventListener('click', function() {
    document.getElementById('zoomedImage').style.display = 'none';
});