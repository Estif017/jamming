import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleTermChange = this.handleTermChange.bind(this);
	}
	handleTermChange(e) {
		this.props.onSearch(e.target.value);
	}
	render() {
		return (
			<div className='SearchBar'>
				<input
					type='text'
					placeholder='Enter A Song, Album, or Artist'
					onChange={this.handleTermChange}
				/>
				<button className='SearchButton'>SEARCH</button>
			</div>
		);
	}
}
