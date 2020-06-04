import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import styles from './ContactsItems.module.scss';

import ContactsItem from './ContactsItem/ContactsItem';

class ContactsItems extends Component {
    state = null;

    deleteContactHandler = (contact) => {
        this.props.onDelectContact(contact)
    };

    render() {
        const contactsList = this.props.contacts.map(
            contactEl => <ContactsItem 
                key={contactEl.id} 
                name={contactEl.name} 
                surname={contactEl.surname} 
                selected={this.props.contact ? contactEl.id === this.props.contact.id : false}
                delete={() => this.deleteContactHandler(contactEl)}
                clicked={() => this.props.onSelectContact(contactEl)} />
        );

        return <div className={styles.ContactsItems}>
            {contactsList}
        </div>
    };
};

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        contact: state.contactSelected
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectContact: (id) => dispatch(actions.selectContact(id)),
        onDelectContact: (contact) => dispatch(actions.deleteContact(contact))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsItems);