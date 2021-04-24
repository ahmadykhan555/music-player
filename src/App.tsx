import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getSongs } from "./api/music";
import "./App.scss";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import SongsList from "./components/SongsList/SongsList";
import { setSongs } from "./store/songs/actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initLocalStorage } from "./utility/localStorage";
import AppLoader from "./components/AppLoader/AppLoader";
import Hero from "./components/Hero/Hero";

interface OwnProps extends PropsFromRedux {}

const App: React.FC<OwnProps> = ({ dispatch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  // on mount
  useEffect(() => {
    loadData();
    initLocalStorage();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const songs = await getSongs();
    dispatch(setSongs(songs));
    setLoading(false);
  };

  return (
    <div className='app'>
      <Hero />
      <div className='app__songs-list'>
        <SongsList />
      </div>
      <div className='app__music-player-wrapper'>
        <MusicPlayer />
      </div>
      <ToastContainer />
      {loading && <AppLoader loaderText='Fetching your music, sit tight!' />}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  songs: state.songsState.songs,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
