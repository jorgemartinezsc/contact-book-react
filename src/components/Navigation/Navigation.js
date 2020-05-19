import React from 'react';

import styles from './Navigation.module.scss';

import NavigationItems from './NavigationItems/NavigationItems';

const Navigation = props => {
    return (
        <header className={styles.Navigation}>
            <h1>Contact Book</h1>
            <NavigationItems />
        </header>
    );
};

export default Navigation;