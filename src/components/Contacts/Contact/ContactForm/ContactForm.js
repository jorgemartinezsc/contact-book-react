import React from 'react';

import styles from './ContactForm.module.scss';

const ContactForm = props => {

    return (
        <form className={styles.ContactForm}>
            <p>ContactForm</p>
            <button onClick={props.clicked}>Cancel</button>
        </form>
    );
};

export default ContactForm;