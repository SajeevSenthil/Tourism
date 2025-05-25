document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video-background');
    const startTime = 12;
  
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = startTime;
      video.play();
    });
  
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= video.duration) {
        video.currentTime = startTime;
        video.play();
      }
    });
  });

  // Scroll reveal animation
const scrollReveal = () => {
  const elements = document.querySelectorAll('.scroll-reveal');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', scrollReveal);
