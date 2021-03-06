import React, { Component } from 'react';

import styles from './ContactHeader.module.scss';

class ContactHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialClasses: [styles.Initial, this.randomColorClass()]
        };
    };

    // shouldComponentUpdate(nextProps) {
    //     if (this.props.id !== nextProps.id) {
    //         return true;
    //     } else {
    //         return false;
    //     };
    // };

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.setInitialBackgrColor();
        };
    };

    backgroundColors = [
        styles.BackgrColor1, 
        styles.BackgrColor2, 
        styles.BackgrColor3, 
        styles.BackgrColor4, 
        styles.BackgrColor5, 
        styles.BackgrColor6, 
        styles.BackgrColor7, 
        styles.BackgrColor8, 
        styles.BackgrColor9
    ];

    randomColorClass = () => {
        const randomIndex = Math.floor(Math.random() * this.backgroundColors.length);
        return this.backgroundColors[randomIndex];
    }

    setInitialBackgrColor = () => {   
        this.setState({
            initialClasses: [styles.Initial, this.randomColorClass()]
        });
    };

    render() {
        return (
            <div className={styles.ContactHeader}>
                <div className={this.state.initialClasses.join(' ')}>
                    <p>{this.props.name[0]}</p>
                    </div>
                <div className={styles.Name}>
                    <h2>{this.props.name} {this.props.surname}</h2>
                    <p>{this.props.group}</p>
                </div>
            </div>
        );
    };
};

export default ContactHeader;