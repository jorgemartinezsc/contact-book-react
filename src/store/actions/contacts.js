import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchContactsStart = () => {
    return {
        type: actionTypes.FETCH_CONTACTS_START
    };
};

export const fetchContactsSuccess = (contacts) => {
    return {
        type: actionTypes.FETCH_CONTACTS_SUCCESS,
        contacts: contacts
    };
};

export const fetchContactsFail = (error) => {
    return {
        type: actionTypes.FETCH_CONTACTS_FAIL,
        error: error
    };
};

export const fetchContacts = (group) => {
    return dispatch => {
        dispatch(fetchContactsStart());
        let url = 'https://contact-book-react.firebaseio.com/contacts.json';
        if (group !== 'all') {
            const queryParams = '?orderBy="group"&equalTo="' + group + '"';
            url = url + queryParams;
        };
        axios.get(url)
            .then(response => {
                const fetchedContacts = [];
                for (let key in response.data) {
                    fetchedContacts.push({
                        ...response.data[key],
                        id: key
                    });
                };
                dispatch(fetchContactsSuccess(fetchedContacts));
            })
            .catch(error => {
                dispatch(fetchContactsFail(error));
            });
    };
};