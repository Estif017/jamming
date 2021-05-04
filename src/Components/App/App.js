import React, { Component } from 'react';
import { Playlist } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import './App.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [
				{
					artist: 'Elton John',
					trackName: 'Tiny Dancer',
					album: 'Madman Across The Water',
					id: '1',
				},
				{
					artist: 'Tim McGraw',
					trackName: 'Tiny Dancer',
					album: 'Love Story',
					id: '2',
				},
				{
					artist: 'Rockabye Baby!',
					trackName: 'Tiny Dancer',
					album: 'Tiny Dancer',
					id: '3',
				},
				{
					artist: 'Ben Folds',
					trackName: 'Tiny Dancer - Live Album Version',
					album: 'Ben Folds - Live',
					id: '4',
				},
			],
			playlistName: 'Rock Playlist',
			playlistTracks: [
				{
					artist: 'The Weekend (Abel Tesfaye)',
					trackName: 'Save Your Tears',
					album: 'Save Your Tears',
					id: '5',
				},
				{
					artist: 'NF',
					trackName: 'When I Grow Up',
					album: 'The Search',
					id: '6',
				},
			],
		};
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
	}
	addTrack(track) {
		let tracks = this.state.playlistTracks;
		!tracks.find((savedTracks) => savedTracks.id === track.id) &&
			tracks.push(track);
		this.setState({ playlistTracks: tracks });
	}
	removeTrack(track) {
		let newPlayList = this.state.playlistTracks.filter(
			(savedTracks) => savedTracks.id !== track.id
		);
		this.setState({ playlistTracks: newPlayList });
	}
	render() {
		return (
			<div>
				<h1>
					Ja<span className='highlight'>mmm</span>ing
				</h1>
				<div className='App'>
					<SearchBar />
					<div className='App-playlist'>
						<SearchResults
							searchResults={this.state.searchResults}
							addTrack={this.addTrack}
						/>
						<Playlist
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
							removeTrack={this.removeTrack}
						/>
					</div>
				</div>
			</div>
		);
	}
}
