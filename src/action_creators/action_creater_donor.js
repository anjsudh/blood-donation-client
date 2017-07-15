/**
 * Created by anjana-2492 on 7/15/2017.
 */

import axios from 'axios';

const API_URL = 'http://localhost:4000/donors';

export const FETCH_DONORS = 'FETCH_DONORS';
export const ADD_DONOR = 'ADD_DONOR';

export function fetchDonors(location) {

    const url = `${API_URL}&q=${location}`;
    const request = axios.get(url);

    return {
        type: FETCH_DONORS,
        payload: request
    };
}

export function addDonor(userData) {

    const url = `${API_URL}`;
    console.log(userData)
    const request = axios.post(url, userData);
    return {
        type: ADD_DONOR,
        payload: request
    };
}
