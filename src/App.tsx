import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getSongs } from "./api/music";
import "./App.scss";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { Song } from "./models/song";
import { setPlayerState, setPlayingNow, setSongs } from "./store/songs/actions";
import { PlayerStates } from "./store/songs/types";

interface OwnProps extends PropsFromRedux {}

const App: React.FC<OwnProps> = ({ dispatch, songs: songsFromState }) => {
  // on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const songs = await getSongs();
    dispatch(setSongs(songs));
  };

  const handleSongClick = (song: Song) => {
    dispatch(setPlayingNow(song));
    dispatch(setPlayerState(PlayerStates.Playing));
  };
  return (
    <div className='app'>
      {songsFromState.map((song: Song) => (
        <p onClick={() => handleSongClick(song)}>{song.name}</p>
      ))}
      <div className='app__music-player-wrapper'>
        <MusicPlayer />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  songs: state.songsState.songs,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
