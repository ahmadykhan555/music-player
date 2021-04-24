import React from "react";
import { Song } from "../../models/song";
import "./SongListItem.scss";
import playIcon from "../../asstes/images/play-icon.svg";
import pauseIcon from "../../asstes/images/pause-icon.svg";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { PlayerStates } from "../../store/songs/types";
interface OwnProps extends PropsFromRedux {
  song: Song;
  onSongItemClicked: (songState: PlayerStates, song: Song) => void;
}
const SongListItem: React.FC<OwnProps> = ({
  song,
  onSongItemClicked,
  playingNow,
  playerState,
}) => {
  return (
    <div className='song-list-item'>
      <div className='song-list-item__controls'>
        {song.id === playingNow?.id && playerState === PlayerStates.Playing ? (
          <button
            className='song-list-item__controls--pause'
            onClick={() => onSongItemClicked(PlayerStates.Paused, song)}>
            <img src={pauseIcon} />
          </button>
        ) : (
          <button
            className='song-list-item__controls--play'
            onClick={() => onSongItemClicked(PlayerStates.Playing, song)}>
            <img src={playIcon} />
          </button>
        )}
      </div>
      <div className='song-list-item__song-info'>
        <h3 className='song-list-item__song-info__name'>{song.name}</h3>
        <p className='song-list-item__song-info__artist'>{song.artist.name}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state: AppState) => ({
  playingNow: state.songsState.playingNow,
  playerState: state.songsState.playerState,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(SongListItem);
