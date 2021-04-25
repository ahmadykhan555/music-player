import React, { useState } from "react";
import { Song } from "../../models/song";
import "./SongListItem.scss";
import playIcon from "../../assets/images/play-icon.svg";
import pauseIcon from "../../assets/images/pause-icon.svg";
import heart from "../../assets/images/heart.png";
import heartFilled from "../../assets/images/heart-filled.png";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { PlayerStates } from "../../store/songs/types";
interface OwnProps extends PropsFromRedux {
  song: Song;
  onSongItemClicked: (songState: PlayerStates, song: Song) => void;
  onSongLiked: (liked: boolean, id: string) => void;
  songLiked: boolean;
}
const SongListItem: React.FC<OwnProps> = ({
  song,
  onSongItemClicked,
  playingNow,
  playerState,
  songLiked = false,
  onSongLiked,
}) => {
  const [liked, setLiked] = useState<boolean>(songLiked);
  const handleSongLiked = (liked: boolean) => {
    setLiked(liked);
    onSongLiked(liked, song.id);
  };

  return (
    <div className='song-list-item' data-testid={`song-list-item-${song.id}`}>
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
      <div className='song-list-item__controls'>
        {liked ? (
          <button
            className='song-list-item__controls--dislike'
            onClick={() => handleSongLiked(false)}>
            <img src={heartFilled} />
          </button>
        ) : (
          <button
            className='song-list-item__controls--like'
            onClick={() => handleSongLiked(true)}>
            <img src={heart} />
          </button>
        )}
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
