const API_KEY = 'AIzaSyBxHmrfHkP61yPp9ZhNTgwS0aBMcI5mQrs'; // dont worry this is an alt key and isnt connected to anything i use so have at it script kid :3
const CHANNEL_ID = 'UC9nw8aKnMsplhps5xEe3BZA'; 

async function fetchLatestVideo() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
  );
  const data = await response.json();
  const videoId = data.items[0].id.videoId;

  const videoContainer = document.getElementById('latest-video');
  videoContainer.innerHTML = `
    <iframe 
      width="4060" 
      height="215" 
      src="https://www.youtube.com/embed/${videoId}" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  `;
}

fetchLatestVideo();
