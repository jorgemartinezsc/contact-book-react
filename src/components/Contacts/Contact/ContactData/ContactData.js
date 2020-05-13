import React from 'react';

import styles from './ContactData.module.scss';

const ContactData = props => {

    const prefix = '+34 ';
    let phoneArray = props.phone.split('');
    for (let i in phoneArray) {
        if ((i + 1) % 3 === 0 && i !== phoneArray.length - 1) {
            phoneArray[i] = phoneArray[i] + ' ';
        }
    };
    
    const updatedPhone = phoneArray.join('');
    const fullPhone = prefix + updatedPhone;


    return (
        <div className={styles.ContactData}>
            <p>{props.email}</p>
            <p>{fullPhone}</p>
        </div>
    );
};

export default ContactData;