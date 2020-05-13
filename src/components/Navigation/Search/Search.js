import React, { Component } from 'react';

import styles from './Search.module.scss';

class Search extends Component {
    state = {
        textToSearch: null
    };

    render() {

        return (
            <section className={styles.Search}>
                <label>
                    <input type='text' placeholder='Search' />
                </label>
            </section>
        );
    };
};

export default Search;