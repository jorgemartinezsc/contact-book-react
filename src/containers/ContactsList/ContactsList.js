import React, { Component } from 'react';

import styles from './ContactsList.module.scss';

import Search from '../../components/Navigation/Search/Search';
import ContactsItems from '../../components/Contacts/ContactsItems/ContactsItems';

class ContactsList extends Component {

    render() {
        return (
            <div className={styles.ContactsList}>
                <Search />
                <ContactsItems />
            </div>
        );
    };
};

export default ContactsList;