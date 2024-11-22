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
