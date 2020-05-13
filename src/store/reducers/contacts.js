import * as actionTypes from '../actions/actionTypes';

const initialState = {
    contacts: [{
        id: 1,
        name: 'Piedad',
        surname: 'Dunfee',
        email: 'piedad.dunfee@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'favorites'
      },
      {
        id: 2,
        name: 'Elsie',
        surname: 'Calvery',
        email: 'elsie.calvery@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'favorites'
      },
      {
        id: 3,
        name: 'Rodger',
        surname: 'Pye',
        email: 'rodger.pye@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      },
      {
        id: 4,
        name: 'Mohammad',
        surname: 'Pye',
        email: 'mohammad.pacheo@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'favorites'
      },
      {
        id: 5,
        name: 'Emmie',
        surname: 'Derryberry',
        email: 'emmie.derryberry@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      },
      {
        id: 6,
        name: 'Lino',
        surname: 'Kottwitz',
        email: 'lino.kottwitz@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'work'
      },
      {
        id: 7,
        name: 'Brittney',
        surname: 'Ruddock',
        email: 'brittney.ruddock@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'family'
      },
      {
        id: 8,
        name: 'Jaimie',
        surname: 'Human',
        email: 'jaimie.human@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      },
      {
        id: 9,
        name: 'Darleen',
        surname: 'Kesten',
        email: 'darleen.kesten@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      },
      {
        id: 10,
        name: 'Georgie',
        surname: 'Hannold',
        email: 'georgie.hannold@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'family'
      },
      {
        id: 11,
        name: 'Doreatha',
        surname: 'Wheeler',
        email: 'doreatha.wheeler@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'favorites'
      },
      {
        id: 12,
        name: 'Christie',
        surname: 'Solum',
        email: 'christie.solum@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'work'
      },
      {
        id: 13,
        name: 'Carlita',
        surname: 'Whitmire',
        email: 'carlita.whitmire@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'family'
      },
      {
        id: 14,
        name: 'Luciana',
        surname: 'Jobe',
        email: 'luciana.jobe@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'favorites'
      },
      {
        id: 15,
        name: 'Sade',
        surname: 'Selig',
        email: 'sade.selig@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      },
      {
        id: 16,
        name: 'Devon',
        surname: 'Goodridge',
        email: 'devon.goodridge@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      },
      {
        id: 17,
        name: 'Bruna',
        surname: 'Starkes',
        email: 'bruna.starkes@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'work'
      },
      {
        id: 18,
        name: 'Glynis',
        surname: 'Hudnall',
        email: 'glynis.hudnall@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'favorites'
      },
      {
        id: 19,
        name: 'Anissa',
        surname: 'Leggett',
        email: 'anissa.leggett@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'family'
      },
      {
        id: 20,
        name: 'Moshe',
        surname: 'Moxley',
        email: 'moshe.moxley@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      },
      {
        id: 21,
        name: 'Shannon',
        surname: 'Olivieri',
        email: 'shannon.olivieri@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'favorites'
      },
      {
        id: 22,
        name: 'Janel',
        surname: 'Vandever',
        email: 'janel.vandever@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'favorites'
      },
      {
        id: 23,
        name: 'Tashia',
        surname: 'Fontes',
        email: 'tashia.fontes@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'work'
      },
      {
        id: 24,
        name: 'Merrilee',
        surname: 'Lynde',
        email: 'merrilee.lynde@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'work'
      },
      {
        id: 25,
        name: 'Coral',
        surname: 'Eastin',
        email: 'coral.eastin@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      },
      {
        id: 26,
        name: 'Shandi',
        surname: 'Hunsaker',
        email: 'shandi.hunsaker@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      },
      {
        id: 27,
        name: 'Wilburn',
        surname: 'Meyer',
        email: 'wilburn.meyer@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'work'
      },
      {
        id: 28,
        name: 'Quintin',
        surname: 'Schrom',
        email: 'quintin.schrom@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'work'
      },
      {
        id: 29,
        name: 'Claribel',
        surname: 'Sipes',
        email: 'claribel.sipes@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'work'
      },
      {
        id: 30,
        name: 'Nevada',
        surname: 'Chappelle',
        email: 'nevada.chappelle@domain.com',
        country: 'Spain',
        phone: '607 123 456',
        group: 'friends'
      }
    ]
};

const filterContacts = (state, action) => {
  const filteredContacts = state.contacts.filter(contact => contact.group === action.group);
  const updatedState = {contacts: filteredContacts};
  return updatedState;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CONTACTS:
          return state;
        case actionTypes.FILTER_CONTACTS:
          return filterContacts(state, action);
        default:
          return state;
    };
};

export default reducer;