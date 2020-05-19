import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ContactCard.module.scss';

import ContactHeader from '../../components/Contacts/Contact/ContactHeader/ContactHeader';
import ContactData from '../../components/Contacts/Contact/ContactData/ContactData';
import ContactForm from '../../components/Contacts/Contact/ContactForm/ContactForm';
import Button from '../../components/UI/Button/Button';
import { Plus } from '../../assets/svg/svg';

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
        const btnAdd = (
            <Button btnType="Add" clicked={this.addContactHandler}>
                <Plus />
            </Button>);
        const btnEdit = <Button btnType="Edit" clicked={this.editContactHandler}>Edit</Button>;

        let contactCard = (
            <div className={styles.WelcomeCard}>
                <h2>Welcome to your Contact Book!</h2>
                <p>Select a contact or create a new one</p>
                {!this.state.adding && btnAdd}
                {(this.state.adding || this.state.editing) && <ContactForm editing={this.state.editing} cancel={this.cancelHandler} />}
            </div>
        );

        if (this.props.contact) {
            contactCard = (
                <div className={styles.ContactCard}>
                    <ContactHeader 
                        id={this.props.contact.id} 
                        name={this.props.contact.name} 
                        surname={this.props.contact.surname} 
                        group={this.props.contact.group} />
                    <ContactData 
                        email={this.props.contact.email} 
                        phone={this.props.contact.phone} />
                    {!this.state.editing && btnEdit}
                    {!this.state.adding && btnAdd}
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