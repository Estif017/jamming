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
					<h3>{/* Track name */}</h3>
					<p>
						{/* Track artist */} |{/* Track album */}
					</p>
				</div>
				{this.renderAction()}
			</div>
		);
	}
}
