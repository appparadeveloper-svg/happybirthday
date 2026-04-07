// Auto-play music if configured
if (audio && CONFIG.music) {
  audio.play().catch(() => {});
}
buildTimeline(rendered);