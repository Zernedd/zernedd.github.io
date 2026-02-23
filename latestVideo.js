const API_KEY = 'AIzaSyAPP5lMdLRuA3GDx4qpLNHHCZM5Z8Pi0bI';
const CHANNEL_ID = 'UC9nw8aKnMsplhps5xEe3BZA';

async function fetchLatestVideo() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1&type=video`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

   
    if (!data.items || data.items.length === 0 || !data.items[0].id.videoId) {
      console.error("No video data returned:", data);
      return;
    }

    const videoId = data.items[0].id.videoId;

    const videoContainer = document.getElementById('latest-video');
    if (!videoContainer) return; 
    videoContainer.innerHTML = `
      <iframe 
        width="460" 
        height="215" 
        src="https://www.youtube.com/embed/${videoId}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;

  } catch (error) {
    console.error("Failed to fetch latest video:", error);
  }
}

fetchLatestVideo();