function createFavicon() {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  ctx.font = '8px sans-serif'; // Reduced font size
  ctx.fillStyle = 'black';
  ctx.textAlign = "center"; // Center the text
  let frame = 0;
  const text = "Zern";
// this made me wanna die
  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(text.substring(0, frame), canvas.width / 2, 10); // Centered text position
    frame = (frame + 1) % (text.length + 1);

    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = canvas.toDataURL("image/x-icon");
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  setInterval(drawFrame, 500);
}

createFavicon();
