let currentIndex = 0;

function changeImage(direction) {
    const images = document.querySelectorAll('.container1 img');
    images[currentIndex].style.display = 'none';

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;// this wraps around to the first image -> goes to the first image 
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;// this wraps around to the last image -> goes to the last image
    }

    images[currentIndex].style.display = 'block';
}