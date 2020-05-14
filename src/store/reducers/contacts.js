import * as actionTypes from '../actions/actionTypes';
import { updateObject, sortContacts } from '../../shared/utility';

const initialState = {
    contacts: [],
    contactSelected: null,
    loading: false
};

const fetchContactsStart = (state, action) => {
  return updateObject(state, {loading: true});
};

const fetchContactsSuccess = (state, action) => {
  return updateObject(state, {
    contacts: sortContacts(action.contacts),
    loading: false
  });
};

const fetchContactsFail = (state, action) => {
  return updateObject(state, {loading: false});
};

const selectContact = (state, action) => {
  return updateObject(state, {
    contactSelected: action.contact
  })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CONTACTS_START:
          return fetchContactsStart(state, action);
        case actionTypes.FETCH_CONTACTS_SUCCESS:
          return fetchContactsSuccess(state, action);
        case actionTypes.FETCH_CONTACTS_FAIL:
          return fetchContactsFail(state, action);
        case actionTypes.SELECT_CONTACT:
          return selectContact(state, action);
        default:
          return state;
    };
};

export default reducer;