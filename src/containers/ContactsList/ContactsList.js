import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ContactsList.module.scss';

import Search from '../../components/Navigation/Search/Search';
import ContactsItems from '../../components/Contacts/ContactsItems/ContactsItems';
import Spinner from '../../components/UI/Spinner/Spinner';

class ContactsList extends Component {

    render() {
        let contactItems = <ContactsItems />
        if (this.props.loading) {
            contactItems = <Spinner />
        }

        return (
            <div className={styles.ContactsList}>
                <Search />
                {contactItems}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loading: state.loading
    };
};

export default connect(mapStateToProps, null)(ContactsList);