import React, {Component} from 'react';
import axios from 'axios';

export class Requester {

    static get base_url() { return "https://derpibooru.org"; }

    constructor(props) {

    }

    request() {
        return axios.request(Requester.base_url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        })
    }

}