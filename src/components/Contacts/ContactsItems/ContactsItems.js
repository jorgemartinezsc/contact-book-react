import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import styles from './ContactsItems.module.scss';

import ContactsItem from './ContactsItem/ContactsItem';

class ContactsItems extends Component {
    state = null;

    deleteContactHandler = (id) => {
        console.log('Deleting contact with id: ' + id)
    };

    render() {
        const contactsList = this.props.contacts.map(
            contactEl => <ContactsItem 
                key={contactEl.id} 
                name={contactEl.name} 
                surname={contactEl.surname} 
                clicked={() => this.props.onSelectContact(contactEl)} />
        );

        return <div className={styles.ContactsItems}>
            {contactsList}
        </div>
    };
};

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectContact: (id) => dispatch(actions.selectContact(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsItems);