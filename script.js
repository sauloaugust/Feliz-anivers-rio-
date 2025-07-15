function showSecret() {
  const overlay = document.getElementById("overlay");
  const secret = document.getElementById("secretMsg");
  overlay.classList.add("show");
  secret.classList.add("show");
  confetti();
}

function closeSecret() {
  const overlay = document.getElementById("overlay");
  const secret = document.getElementById("secretMsg");
  overlay.classList.remove("show");
  secret.classList.remove("show");
}

function downloadVideo() {
  const videoUrl = document.getElementById("video-bg").querySelector("source").src;
  const a = document.createElement("a");
  a.href = videoUrl;
  a.download = "video.mp4";
  a.click();
}

window.addEventListener("load", () => {
  const video = document.getElementById("video-bg");
  video.play().catch((e) => {
    console.warn("Vídeo não pode ser iniciado automaticamente:", e);
  });
});

