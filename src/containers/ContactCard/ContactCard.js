import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        let contactCard = (
            <div className={styles.ContactCard}>
                <p>Welcome to your Contact Book!</p>
            </div>
        );

        if (this.props.contact) {
            contactCard = (
                <div className={styles.ContactCard}>
                    <ContactHeader 
                        name={this.props.contact.name} 
                        surname={this.props.contact.surname} 
                        group={this.props.contact.group} />
                    <ContactData 
                        email={this.props.contact.email} 
                        phone={this.props.contact.phone} />
                    {!this.state.editing && <Button btnType="Edit" clicked={this.editContactHandler}>Edit</Button>}
                    {!this.state.adding && <Button btnType="Add" clicked={this.addContactHandler}>+</Button>}
                    {(this.state.adding || this.state.editing) && <ContactForm editing={this.state.editing} cancel={this.cancelHandler} />}
                </div>
            );
        }

        return contactCard;
    };
};

const mapStateToProps = state => {
    return {
        contact: state.contactSelected
    };
};

export default connect(mapStateToProps, null)(ContactCard);