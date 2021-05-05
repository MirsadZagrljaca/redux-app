import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class SongList extends Component {
  render() {
    return (
      <div className="sl">
        {this.props.songs.map((song) => (
          <div className="item" key={song.tittle}>
            <div className="left">{song.tittle}</div>
            <div className="right">
              <button
                onClick={() => {
                  this.props.selectedSong(song);
                }}
                className="primary">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectedSong })(SongList);
