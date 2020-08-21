WebSocket = undefined;
let ifr = document.getElementById("TXTextControl");
let images = [...ifr.contentDocument.querySelectorAll(".page-image")];
let allImagesMarkup = ``;
images.forEach((image) => (allImagesMarkup += `<img src="${image.src}">`));
window
  .open("")
  .document.write(
    `<head><title>- Arlequin.Impressions</title></head><div>${allImagesMarkup}</div><script>window.setTimeout(window.print, 300);</script>`
  );
console.clear();
