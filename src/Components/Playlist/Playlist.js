import React, { Component } from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}
	handleNameChange(e) {
		this.props.onNameChange(e.target.value);
	}
	render() {
		return (
			<div className='Playlist'>
				<input
					type='text'
					defaultValue={'New Playlist'}
					onChange={this.handleNameChange}
				/>
				<TrackList
					tracks={this.props.playlistTracks}
					removeTrack={this.props.removeTrack}
					isRemoval={true}
				/>
				<button className='Playlist-save' onClick={this.props.onSave}>
					SAVE TO SPOTIFY
				</button>
			</div>
		);
	}
}
