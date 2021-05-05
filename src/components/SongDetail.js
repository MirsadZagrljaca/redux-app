import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) return <div className="sd">Select a song</div>;

  return (
    <div className="sd">
      <h3>Song details:</h3>
      <p>Tittle: {song.tittle}</p>
      <p>Lenght: {song.length}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
