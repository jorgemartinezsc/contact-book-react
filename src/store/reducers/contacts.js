import * as actionTypes from '../actions/actionTypes';
import { updateObject, sortContacts } from '../../shared/utility';

const initialState = {
    contacts: [],
    contactSelected: null,
    groupSelected: 'all',
    loading: false,
    error: null
};

const selectGroup = (state, action) => {
  return updateObject(state, {
    groupSelected: action.groupSelected
  });
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
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const selectContact = (state, action) => {
  return updateObject(state, {
    contactSelected: action.contact
  });
};

const createContactStart = (state, action) => {
  return updateObject(state, {loading: true});
};

const createContactSuccess = (state, action) => {
  return updateObject(state, {
    contactSelected: action.contact,
    loading: false
  });
};

const createContactFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_GROUP:
        return selectGroup(state, action);
    case actionTypes.FETCH_CONTACTS_START:
      return fetchContactsStart(state, action);
    case actionTypes.FETCH_CONTACTS_SUCCESS:
      return fetchContactsSuccess(state, action);
    case actionTypes.FETCH_CONTACTS_FAIL:
      return fetchContactsFail(state, action);
    case actionTypes.SELECT_CONTACT:
      return selectContact(state, action);
    case actionTypes.CREATE_CONTACT_START:
      return createContactStart(state, action);
    case actionTypes.CREATE_CONTACT_SUCCESS:
      return createContactSuccess(state, action);
    case actionTypes.CREATE_CONTACT_FAIL:
      return createContactFail(state, action);
    default:
      return state;
  };
};

export default reducer;