import React, { Component } from 'react';

import styles from './Layout.module.scss';

import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import ContactsList from '../../containers/ContactsList/ContactsList';
import ContactCard from '../../containers/ContactCard/ContactCard';


class Layout extends Component {
    // state = {

    // };

    render() {
        return (
            <main className={styles.Layout}>
                <NavigationItems />
                <ContactsList />
                <ContactCard />
            </main>
        );
    };
};

export default Layout;