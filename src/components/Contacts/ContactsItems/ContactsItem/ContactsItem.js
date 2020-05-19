import React from 'react';

import styles from './ContactsItem.module.scss';

import Button from '../../../UI/Button/Button';

import { Plus } from '../../../../assets/svg/svg';

const ContactsItem = props => {

    let classes = [styles.ContactsItem];

    if (props.selected) {
        classes.push(styles.SelectedItem);
    }

    return <li 
        className={classes.join(' ')}
        onClick={props.clicked}>
            {props.name} {props.surname}
            <Button btnType="DeleteContact" clicked={props.delete}>
                <Plus />
            </Button>
        </li>;
};

export default ContactsItem;