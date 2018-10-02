import React, {Component} from 'react';
import axios from 'axios';

export class DerpiFeed {

    constructor(derpiSearch) {
        this.feed = [];
        this.currPage = 0;
        this.endOfFile = false;
        this.derpiSearch = derpiSearch;
    }

    reset() {
        this.feed = [];
        this.currPage = 0;
    }

    getFeed(getAsNew) {
        if (getAsNew === true) {
            this.reset();
        } else {
            this.currPage += 1;
        }
        console.debug('page', this.currPage, 'feed', this.feed);

        let mode = this.derpiSearch ? 'search' : 'images';

        console.log('dsfnsdi', this.derpiSearch);

        return axios.get(`https://derpibooru.org/${mode}.json`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: {
                page: this.currPage,
                q: this.derpiSearch?.searchTerm ?? ``,
            }
        }).then((response) => {
            console.log('data', response);
            let imageList = response.data[mode];
            return new Promise((resolve, reject) => {
                console.log('image', imageList);
                if (imageList === null) {
                    reject(Error("Returned imageList is null"));
                } else {
                    resolve(imageList.map((image) => {
                        return new DerpiImage(image);
                    }));
                }
            })
        }).then((pList) => {
            // console.log('got page', this.currPage);
            this.feed = this.feed.concat(pList);
            // let numList = pList.map((item, idx) => {
            //     return idx + 15 * (this.currPage - 1);
            // });
            // this.feed = this.feed.concat(numList);
            return new Promise((resolve, reject) => {
                resolve(pList);
                // resolve(numList);
            });

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
        let width = this._rawJson['width'], height = this._rawJson['height'];
        let ratio = height / width;
        return {width: width, height: height, ratio: ratio};
    }
}

export class DerpiSearch {

    static sortOrderEnum = Object.freeze({
        creationDate: {queryString: 'created_at', description: 'Creation Date'},
        score: {queryString: 'score', description: 'Score'},
        wilsonScore: {queryString: 'wilson', description: 'Wilson Score'},
        relevance: {queryString: 'relevance', description: 'Relevance'},
        width: {queryString: 'width', description: 'Width'},
        height: {queryString: 'height', description: 'Height'},
        comments: {queryString: 'comments', description: 'Comments'},
        random: {queryString: 'random', description: 'Random!'},

    })

    constructor(/* string */ searchTerm, sortBy, sortOrder) {
        this.searchTerm = searchTerm;
        this.sortOrder = sortOrder
    }

}


