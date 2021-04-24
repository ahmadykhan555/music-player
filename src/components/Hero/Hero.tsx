import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../store/rootReducer";
import "./Hero.scss";
interface OwnProps extends PropsFromRedux {}
const Hero: React.FC<OwnProps> = ({ playingNow }) => {
  return (
    <div className='hero-component'>
      <div className='hero-component__content'>
        <div className='hero-component__content__playing-now'>
          <p className='hero-component__content__playing-now__label'>
            {playingNow?.name || "Your one stop music solution!"}
          </p>
          {playingNow?.artist && (
            <p className='hero-component__content__playing-now__artist'>
              By:
              {playingNow.artist.artist_name || "Artist name"}
            </p>
          )}
          <div className='hero-component__content__playing-now__genres'>
            {playingNow?.song_genres?.map((genre) => (
              <p className='hero-component__content__playing-now__genres__cell'>
                {genre.name}
              </p>
            ))}
          </div>
        </div>
        <div className='hero-component__content__thumbnail'>
          <img
            src={
              playingNow?.cover_image_path ||
              "https://www.loudly.com/soundtracks/app/static/media/bgr-image.2a0f12b1.png"
            }
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: AppState) => ({
  playingNow: state.songsState.playingNow,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Hero);
