import React, {Component} from 'react';

export class DerpiFeed {

	constructor(props) {	
	  this.feed = [];
	}

	reset() {
		var state = this.state;
		state.feed = [];
		this.setState(state);
	}

	getFeed(getAsNew) {
		if (getAsNew === true) {
			this.reset();
		}
		return fetch('https://derpibooru.org/images.json', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}).then((response) => {
			return response.json();
		}).then((jsonText) => {
			let imageList = jsonText['images'];
			console.log('hello')
			return new Promise((resolve, reject) => {
				resolve(imageList.map((image) => {
					return new DerpiImage(image);
				}));
			})
		}).then((pList) => {
			this.feed = pList;
			console.log(this.feed.length);
		});
	}
}

export class DerpiImage {

	constructor(json) {
	  this._rawJson = json;
	}

	get id() {  // int
		return this._rawJson['id'];
	}

	get uploader() {  // string
		return this._rawJson['uploader'];
	}

	get imageUrl() {
		return 'https:' + this._rawJson['image'];
	}
}




