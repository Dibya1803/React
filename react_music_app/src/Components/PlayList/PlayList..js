import React from "react";
import "./PlayList.css";
//import TrackList from "./TrackList";
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <h2>New Playlist</h2>
        <div
          onChange={this.handleNameChange} 
          value={this.props.playlistName}
        />
        <TrackList 
          tracks={this.props.playlistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>Save to Spotify</button>
      </div>
    );
  }
}

export default Playlist;
