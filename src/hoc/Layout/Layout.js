import React, { Component } from 'react';

import styles from './Layout.module.scss';

import Navigation from '../../components/Navigation/Navigation';
import ContactsList from '../../containers/ContactsList/ContactsList';
import ContactCard from '../../containers/ContactCard/ContactCard';


class Layout extends Component {
    render() {
        return (
            <div className={styles.Layout}>
                <Navigation />
                <main>
                    <ContactsList />
                    <ContactCard />
                </main>
            </div>
        );
    };
};

export default Layout;