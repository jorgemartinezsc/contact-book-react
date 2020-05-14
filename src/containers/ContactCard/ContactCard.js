import React, { Component } from 'react';

import styles from './ContactCard.module.scss';

import ContactHeader from '../../components/Contacts/Contact/ContactHeader/ContactHeader';
import ContactData from '../../components/Contacts/Contact/ContactData/ContactData';
import ContactForm from '../../components/Contacts/Contact/ContactForm/ContactForm';
import Button from '../../components/UI/Button/Button';

class ContactCard extends Component {
    state = {
        adding: false,
        editing: false
    };

    addContactHandler = () => {
        this.setState({
            adding: true,
            editing: false
        })
    };

    editContactHandler = () => {
        this.setState({
            adding: false,
            editing: true
        })
    };

    cancelHandler = () => {
        this.setState({
            adding: false,
            editing: false
        })
    };

    render() {
        return (
            <div className={styles.ContactCard}>
                <ContactHeader name="Jorge" surname="Martinez" group="family" />
                <ContactData email="test@test.com" phone="654321987" />
                {!this.state.editing && <Button btnType="Edit" clicked={this.editContactHandler}>Edit</Button>}
                {!this.state.adding && <Button btnType="Add" clicked={this.addContactHandler}>+</Button>}
                {(this.state.adding || this.state.editing) && <ContactForm editing={this.state.editing} cancel={this.cancelHandler} />}
            </div>
        );
    };
};

export default ContactCard;