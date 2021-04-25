import React, { useEffect, useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { setPlayerState } from "../../store/songs/actions";
import { PlayerStates } from "../../store/songs/types";
import "./MusicPlayer.scss";
interface OwnProps extends PropsFromRedux {}
const MusicPlayer: React.FC<OwnProps> = ({
  playerState,
  playingNow,
  dispatch,
}) => {
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

  const handlePause = () => {
    dispatch(setPlayerState(PlayerStates.Paused));
  };
  const handlePlay = () => {
    dispatch(setPlayerState(PlayerStates.Playing));
  };

  return (
    <div className='music-player-component' data-testid='app-music-player'>
      <audio
        ref={playerRef}
        controls
        autoPlay
        onPause={handlePause}
        onPlay={handlePlay}
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
