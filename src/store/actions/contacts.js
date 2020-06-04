import axios from 'axios';
import * as actionTypes from './actionTypes';

export const selectGroup = (group) => {
    return {
        type: actionTypes.SELECT_GROUP,
        groupSelected: group
    };
}

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

export const selectContact = (contact) => {
    return {
        type: actionTypes.SELECT_CONTACT,
        contact: contact
    };
};

export const createContactStart = () => {
    return {
        type: actionTypes.CREATE_CONTACT_START
    };
};

export const createContactSuccess = (contact) => {
    return {
        type: actionTypes.CREATE_CONTACT_SUCCESS,
        contact: contact
    };
};

export const createContactFail = (error) => {
    return {
        type: actionTypes.CREATE_CONTACT_FAIL,
        error: error
    };
};

export const createContact = (contact) => {
    return dispatch => {
        dispatch(createContactStart());
        let url = 'https://contact-book-react.firebaseio.com/contacts.json';
        axios.post(url, contact)
            .then(response => {
                dispatch(createContactSuccess(contact));
                dispatch(selectGroup(contact.group));
                dispatch(fetchContacts(contact.group));
            })
            .catch(error => {
                dispatch(createContactFail(error));
            });
    };
};

export const deleteContactStart = () => {
    return {
        type: actionTypes.DELETE_CONTACT_START
    };
};

export const deleteContactFail = (error) => {
    return {
        type: actionTypes.DELETE_CONTACT_FAIL,
        error: error
    };
};

export const deleteContact = (contact) => {
    return dispatch => {
        dispatch(deleteContactStart());
        let url = `https://contact-book-react.firebaseio.com/contacts/${contact.id}.json`;
        axios.delete(url)
            .then(response => {
                dispatch(selectContact(null));
                dispatch(selectGroup(contact.group));
                dispatch(fetchContacts(contact.group));
            })
            .catch(error => {
                dispatch(createContactFail(error));
            });
    };
};