import React from 'react';

import styles from './Input.module.scss';

const Input = props => {
    let inputElement = null;
    let inputClasses = [styles.InputElement];

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={inputClasses.join(' ')}
                    value={props.value} 
                    onChange={props.changed}>
                        <option disabled value={props.value}>{props.elementConfig.placeholder}</option>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed} />;
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.name}</label>
            {inputElement}
        </div>
    )
};

export default Input;