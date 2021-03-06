import React, { Component } from 'react';
import { Track } from '../Track/Track';

export class TrackList extends Component {
	render() {
		return (
			<div className='TrackList'>
				{this.props.tracks.map((track) => (
					<Track
						key={track.id}
						track={track}
						addTrack={this.props.addTrack}
						removeTrack={this.props.removeTrack}
						isRemoval={this.props.isRemoval}
					/>
				))}
			</div>
		);
	}
}
