const videos = document.querySelectorAll(".video-player");

// Click video to play/pause
videos.forEach((video) => {
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

// Pause videos that leave the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.pause();
      }
    });
  },
  { threshold: 0.6 }
);

videos.forEach((video) => observer.observe(video));
