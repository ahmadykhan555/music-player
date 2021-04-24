import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getSongs } from "./api/music";
import "./App.scss";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import SongsList from "./components/SongsList/SongsList";
import { setSongs } from "./store/songs/actions";

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

  return (
    <div className='app'>
      <div className='app__songs-list'>
        <SongsList />
      </div>
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
