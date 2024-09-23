import * as rive from "@rive-app/canvas";

const chatterRive = new rive.Rive({
  src: "public/assets/chat.riv",
  canvas: document.getElementById("canvas_chat"),
  autoplay: true,
  onLoad: () => {
    chatterRive.resizeDrawingSurfaceToCanvas();
  },
});

const spotifyRive = new rive.Rive({
  src: "public/assets/spotify.riv",
  canvas: document.getElementById("canvas_spotify"),
  autoplay: true,
  onLoad: () => {
    spotifyRive.resizeDrawingSurfaceToCanvas();
  },
});

const nightlyRive = new rive.Rive({
  src: "/assets/coins.riv",
  canvas: document.getElementById("canvas_nightly"),
  autoplay: true,
  onLoad: () => {
    nightlyRive.resizeDrawingSurfaceToCanvas();
  },
});
