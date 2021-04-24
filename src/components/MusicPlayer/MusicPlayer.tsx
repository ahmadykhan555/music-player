import React, { useEffect, useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { PlayerStates } from "../../store/songs/types";
import "./MusicPlayer.scss";
interface OwnProps extends PropsFromRedux {}
const MusicPlayer: React.FC<OwnProps> = ({ playerState, playingNow }) => {
  const playerRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (playerRef.current) {
      if (playerState === PlayerStates.Paused) {
        playerRef.current.pause();
      } else if (playerState === PlayerStates.Playing) {
        playerRef.current.play();
      }
    }
  }, [playerState, playerRef.current]);

  return (
    <div className='music-player-component'>
      <audio
        ref={playerRef}
        controls
        autoPlay
        src={playingNow?.music_file_path}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  playingNow: state.songsState.playingNow,
  playerState: state.songsState.playerState,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(MusicPlayer);
