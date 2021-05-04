import React, { Component } from 'react';
import './Track.css';

export class Track extends Component {
	constructor(props) {
		super(props);
		this.onAdd = this.onAdd.bind(this);
		this.onRemove = this.onRemove.bind(this);
	}
	onAdd() {
		this.props.addTrack(this.props.track);
	}
	onRemove() {
		this.props.removeTrack(this.props.track);
	}
	renderAction() {
		return this.props.isRemoval ? (
			<button className='Track-action' onClick={this.onRemove}>
				-
			</button>
		) : (
			<button className='Track-action' onClick={this.onAdd}>
				+
			</button>
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
