import React from 'react';
import './App.css';
import Playlist from '../PlayList/PlayList.';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../Util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: [],
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese = this.doThese.bind(this);
  }

  search(term) {
    console.log('Search term:', term); // Debugging: Check search term
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults });
      console.log('Search Results State:', this.state.searchResults); // Debugging: Check state
    });
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let searchResults = this.state.searchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    searchResults.unshift(track);
    this.setState({ playlistTracks: tracks, searchResults });
  }

  removeTrackSearch(track) {
    let searchResults = this.state.searchResults;
    searchResults = searchResults.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ searchResults });
  }

  doThese(track) {
    this.addTrack(track);
    this.removeTrackSearch(track);
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: []
      });
    });
  }

  render() {
    return (
      <div>
        <h1>
          <a href="http://localhost:3000">Musicophile</a>
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {this.state.searchResults.length > 0 && (
              <SearchResults 
                searchResults={this.state.searchResults} 
                onAdd={this.doThese} 
              />
            )}
            <Playlist 
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks} 
              onNameChange={this.updatePlaylistName} 
              onRemove={this.removeTrack} 
              onSave={this.savePlaylist} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
