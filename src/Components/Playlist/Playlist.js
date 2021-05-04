import React, { Component } from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends Component {
	render() {
		return (
			<div className='Playlist'>
				<input
					type='text'
					defaultValue={
						this.props.playlistName ? this.props.playlistName : 'New Playlist'
					}
				/>
				<TrackList
					tracks={this.props.playlistTracks}
					removeTrack={this.props.removeTrack}
					isRemoval={true}
				/>
				<button className='Playlist-save'>SAVE TO SPOTIFY</button>
			</div>
		);
	}
}
