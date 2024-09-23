import * as rive from "@rive-app/canvas";

const chatterRive = new rive.Rive({
  src: "chat.riv",
  canvas: document.getElementById("canvas_chat"),
  autoplay: true,
  onLoad: () => {
    chatterRive.resizeDrawingSurfaceToCanvas();
  },
});

const spotifyRive = new rive.Rive({
  src: "spotify.riv",
  canvas: document.getElementById("canvas_spotify"),
  autoplay: true,
  onLoad: () => {
    spotifyRive.resizeDrawingSurfaceToCanvas();
  },
});

const nightlyRive = new rive.Rive({
  src: "coins.riv",
  canvas: document.getElementById("canvas_nightly"),
  autoplay: true,
  onLoad: () => {
    nightlyRive.resizeDrawingSurfaceToCanvas();
  },
});
