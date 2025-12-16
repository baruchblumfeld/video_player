const loadBtn = document.getElementById('loadVideo');

loadBtn.addEventListener('click', () => {
  const url = document.getElementById('videoUrl').value;
  const videoId = extractVideoId(url);

  if (!videoId) {
    alert('Nieprawidłowy link do YT!');
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.width = '560';
  iframe.height = '315';
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.allowFullscreen = true;

  iframe.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

  // iframe.sandbox = 'allow-scripts allow-same-origin allow-presentation allow-popups';

  const player = document.getElementById('player');
  player.innerHTML = '';
  player.appendChild(iframe);
});

function extractVideoId(url) {
  if (typeof url !== 'string') return null;
  const match = url.match(
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}
