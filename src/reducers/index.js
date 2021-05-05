import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { tittle: "One Against All", length: "3:39" },
    { tittle: "Scavanger Of Human Sorrow", length: "6:57" },
    { tittle: "Spiritual healing", length: "7:45" },
    { tittle: "The Philosopher", length: "4:11" },
    { tittle: "Spirit Crusher", length: "6:47" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
