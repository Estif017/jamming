import React, { Component } from 'react';
import './Track.css';

export class Track extends Component {
	renderAction() {
		return this.props.isRemoval ? (
			<button className='Track-action'>-</button>
		) : (
			<button className='Track-action'>+</button>
		);
	}
	render() {
		return (
			<div className='Track'>
				<div className='Track-information'>
					<h3>{this.props.track.trackName}</h3>
					<p>
						{this.props.track.artist} | {this.props.track.album}
					</p>
				</div>
				{this.renderAction()}
			</div>
		);
	}
}
