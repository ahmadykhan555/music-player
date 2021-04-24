import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getSongs } from "./api/music";
import "./App.scss";
import { Song } from "./models/song";
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
    <div className='App'>
      {songsFromState.map((song: Song) => (
        <p>{song.name}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  songs: state.songsState.songs,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
