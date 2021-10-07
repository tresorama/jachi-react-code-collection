# Usage in Vanilla JS

```js
import PlayerAbstractController from ".";

const playlistItems = [{ src: "/assets/videos/Video.mp4" }, { src: "/assets/videos/Loop.mp4" }];

const myPlayerController = new PlayerAbstractController();
myPlayerController.setPlayerElement(document.querySelector("#my-pl"));
myPlayerController.loadPlaylist(playlistItems);
myPlayerController.setCallbacks({
  onPlaylistItemStarts: (PlayerController, index) => {
    if (index === 0) {
      console.log("Index : 0 ");
    }
    if (index === 1) {
      PlayerController.setLoop(true); // enable loop
      console.log("Index : 1 ");
    }
  },
  onPlaylistItemEnds: (PlayerController, index) => {},
});

document.getElementById("play").addEventListener("click", () => myPlayerController.play());
document.getElementById("pause").addEventListener("click", () => myPlayerController.pause());
document.getElementById("next").addEventListener("click", () => myPlayerController.playNextPlaylistItem());
document.getElementById("prev").addEventListener("click", () => myPlayerController.playPreviousPlaylistItem());
document.getElementById("mute").addEventListener("click", () => myPlayerController.mute());
document.getElementById("unmute").addEventListener("click", () => myPlayerController.unmute());
document.getElementById("set-vol-10").addEventListener("click", () => myPlayerController.setVolume(10));
document.getElementById("set-vol-90").addEventListener("click", () => myPlayerController.setVolume(90));
```

## Usage in React

```js
import usePlayer from ".";

const playlistItems2 = [{ src: "/assets/videos/Video.mp4" }, { src: "/assets/videos/Loop.mp4" }];

const ExampleComponent = (props) => {
  const [lableText, setLabelText] = React.useState("");

  const [PlayerComponent, PlayerController] = usePlayer({
    type: "video",
    playlistItems: playlistItems2,
    playerEventsCallbacks: {
      onPlaylistItemStarts: (PlayerController, index) => {
        if (index === 0) {
          setLabelText("Index : 0 ");
        }
        if (index === 1) {
          PlayerController.setLoop(true); // enable loop
          setLabelText("Index : 1 ");
        }
      },
      onPlaylistItemEnds: () => {},
    },
  });

  return (
    <div>
      <PlayerComponent className="my-player" />
    </div>
  );
};
```
