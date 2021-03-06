import React from 'react';

import styles from './NavigationItem.module.scss';

const NavigationItem = props => {

    let classes = [styles.NavigationItem];

    if (props.group === 'all' || props.group === 'favorites') {
        classes.push(styles.GreaterItem);
    }

    if (props.selected === props.group) {
        classes.push(styles.SelectedItem);
    }

    return <li 
        className={classes.join(' ')} 
        onClick={props.clicked}>{props.name}</li>
};

export default NavigationItem;