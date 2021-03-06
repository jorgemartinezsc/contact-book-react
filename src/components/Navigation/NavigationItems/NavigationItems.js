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

    componentDidMount() {
        this.props.onFetchContacts('all');
    }

    selectContactGroupHandler(group) {
        this.props.onFetchContacts(group);
    }

    render() {
        const navigationList = this.state.navigationElements.map(
            navigationEl => <NavigationItem 
                key={navigationEl.group} 
                group={navigationEl.group}
                name={navigationEl.name} 
                selected={this.props.groupSelected}
                clicked={() => this.selectContactGroupHandler(navigationEl.group)} />
        );

        return (
            <header className={styles.NavigationItems}>
                <nav>
                    <ul>
                        {navigationList}
                    </ul>
                </nav>
            </header>
        );
    };
};

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        groupSelected: state.groupSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchContacts: (group) => dispatch(actions.fetchContacts(group)),
        onSelectGroup: (group) => dispatch(actions.selectGroup(group))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);