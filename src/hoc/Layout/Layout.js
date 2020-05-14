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
            <div className={styles.Layout}>
                <NavigationItems />
                <main>
                    <ContactsList />
                    <ContactCard />
                </main>
            </div>
        );
    };
};

export default Layout;