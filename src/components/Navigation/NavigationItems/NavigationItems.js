import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import styles from './NavigationItems.module.scss';

import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {
    state = {
        navigationElements: [
            {
                name: 'All contacts',
                group: 'all'
            },
            {
                name: 'Favorites',
                group: 'favorites'
            },
            {
                name: 'Friends',
                group: 'friends'
            },
            {
                name: 'Family',
                group: 'family'
            },
            {
                name: 'Work',
                group: 'work'
            }
        ]
    };

    selectContactGroupHandler(group) {
        this.props.onGroupSelected(group);
    }

    render() {
        const navigationList = this.state.navigationElements.map(
            navigationEl => <NavigationItem 
                key={navigationEl.group} 
                group={navigationEl.group}
                name={navigationEl.name} 
                clicked={() => this.selectContactGroupHandler(navigationEl.group)} />
        );

        return (
            <nav className={styles.NavigationItems}>
                <ul>
                    {navigationList}
                </ul>
            </nav>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGroupSelected: (group) => dispatch(actions.filterContacts(group))
    }
}

export default connect(null, mapDispatchToProps)(NavigationItems);