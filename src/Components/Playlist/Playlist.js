import React, { Component } from 'react';
import './Playlist.css';

export class Playlist extends Component {
	render() {
		return (
			<div className='Playlist'>
				<input type='text' defaultValue='New Playlist' />
				{/* Add TrackList Component */}
				<button className='Playlist-save'>SAVE TO SPOTIFY</button>
			</div>
		);
	}
}
