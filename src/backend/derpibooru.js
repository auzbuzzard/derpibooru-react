import React, {Component} from 'react';
import axios from 'axios';

export class DerpiFeed {

	constructor(mode, params) {
		this.feed = [];
		this.currPage = 1;
		this.endOfFile = false;

	}

	reset() {
        this.feed = [];
		this.currPage = 1;
	}

	getFeed(getAsNew) {
		if (getAsNew === true) {
			this.reset();
		} else {
		    this.currPage += 1;
        }

		return axios.get('https://derpibooru.org/images.json', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
            params: {
			    page: this.currPage
            }
		}).then((response) => {
			let imageList = response.data['images'];
			return new Promise((resolve, reject) => {
				resolve(imageList.map((image) => {
					return new DerpiImage(image);
				}));
			})
		}).then((pList) => {
			this.feed = this.feed.concat(pList);
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

	get previewImageUrl() {
	    return 'https:' + this._rawJson['representations']['medium'];
    }

	get size() {
		return {width: this._rawJson['width'], height: this._rawJson['height']}
	}
}




