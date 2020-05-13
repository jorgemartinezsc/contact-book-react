import React from 'react';

import styles from './ContactsItem.module.scss';

const ContactsItem = props => {

    return <li 
        className={styles.ContactsItem}
        onClick={props.clicked}>
            {props.name} {props.surname}
        </li>;
};

export default ContactsItem;