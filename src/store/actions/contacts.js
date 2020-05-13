import * as actionTypes from './actionTypes';

export const fetchContacts = (contacts) => {
    return {
        type: actionTypes.FETCH_CONTACTS,
        contacts: contacts
    };
};

export const filterContacts = (group) => {
    return {
        type: actionTypes.FILTER_CONTACTS,
        group: group
    };
};