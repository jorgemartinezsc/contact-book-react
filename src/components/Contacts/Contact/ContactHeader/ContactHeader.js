import React, { Component } from 'react';

import styles from './ContactHeader.module.scss';

class ContactHeader extends Component {
    constructor(props) {
        super(props);
        this.setInitialBackgrColor();
    };

    shouldComponentUpdate(nextProps) {
        if (this.props.id !== nextProps.id) {
            console.log('Updated!');
            return true;
        } else {
            console.log('Not updated!');
            return false;
        }
    };

    componentDidUpdate() {
        this.setInitialBackgrColor();
    }

    // componentDidMount() {
    //     this.setInitialBackgrColor();
    // }

    initialClasses = [styles.Initial];

    setInitialBackgrColor = () => {
        const backgroundColors = [
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
    
        const randomIndex = Math.floor(Math.random() * backgroundColors.length);
        this.initialClasses.splice(1, 1);
        this.initialClasses.push(backgroundColors[randomIndex]);
        console.log(this.initialClasses);
    };

    render() {
        return (
            <div className={styles.ContactHeader}>
                <div className={this.initialClasses.join(' ')}>
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