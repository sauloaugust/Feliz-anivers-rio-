function showSecret() {
  const secret = document.getElementById("secretMsg");
  secret.classList.add("show");
  confetti();
}

function downloadVideo() {
  const videoUrl = document.getElementById("video-bg").querySelector("source").src;
  const a = document.createElement("a");
  a.href = videoUrl;
  a.download = "video.mp4";
  a.click();
}
