import React from "react";
import PlayerAbstractController from "./PlayerAbstractController";

const HTMLPlayer = ({ type, domRef, ...props }) => {
  return type === "video" ? <video {...props} ref={domRef} /> : <audio {...props} ref={domRef} />;
};

const usePlayer = ({ type, playlistItems, playerEventsCallbacks, ...props }) => {
  const _PlayerAbstractController = React.useRef();
  const _PlayerElementRef = React.useRef();
  const _Player = React.useRef((props) => <HTMLPlayer {...props} type={type} domRef={_PlayerElementRef} />);

  React.useEffect(() => {
    if (_PlayerElementRef.current) {
      const instance = new PlayerAbstractController();
      instance.setPlayerElement(_PlayerElementRef.current);
      _PlayerAbstractController.current = instance;
    }
  }, []);

  React.useEffect(() => {
    if (_PlayerAbstractController.current) {
      const instance = _PlayerAbstractController.current;
      instance.loadPlaylist(playlistItems);
    }
  }, [playlistItems]);

  React.useEffect(() => {
    if (_PlayerAbstractController.current) {
      const instance = _PlayerAbstractController.current;
      instance.setCallbacks(playerEventsCallbacks);
    }
  }, [playerEventsCallbacks]);

  return [_Player.current, _PlayerAbstractController.current];
};

export default usePlayer;
