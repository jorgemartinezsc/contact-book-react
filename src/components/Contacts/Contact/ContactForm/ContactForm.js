import React, { Component } from 'react';
// import axios from 'axios';

import styles from './ContactForm.module.scss';

import { updateObject, checkValidity } from '../../../../shared/utility';

import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';
import { Plus } from '../../../../assets/svg/svg';

class ContactForm extends Component {
    state = {
        title: 'New contact',
        submitText: 'Add',
        btnType: 'AddSubmit',
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'england', displayValue: 'England'},
                        {value: 'france', displayValue: 'France'},
                        {value: 'germany', displayValue: 'Germany'},
                        {value: 'italy', displayValue: 'Italy'},
                        {value: 'portugal', displayValue: 'Portugal'},
                        {value: 'spain', displayValue: 'Spain'}
                    ],
                    placeholder: 'Select...'
                },
                value: 'select',
                validation: {},
                valid: true
            },
            group: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'favorites', displayValue: 'Favorites'},
                        {value: 'friends', displayValue: 'Friends'},
                        {value: 'family', displayValue: 'Family'},
                        {value: 'work', displayValue: 'Work'}
                    ],
                    placeholder: 'Select...'
                },
                value: 'select',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    };

    componentDidMount() {
        if (this.props.editing === true) {
            this.setState({
                title: 'Edit contact', 
                submitText: 'Update',
                btnType: 'EditSubmit'
            });
        };
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.contactForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.contactForm[inputIdentifier].validation),
            touched: true
        });

        const updatedContactForm = updateObject(this.state.contactForm, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid
        };

        this.setState({contactForm: updatedContactForm, formIsValid: formIsValid});
    };

    createContactHandler = (event) => {
        // event.preventDefault()

        // const formData = {};
        // for (let formElementIdentifier in this.state.contactForm) {
        //     formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value
        // };
        // const contact = {...formData};
        // console.log(contact);
        // axios.post('https://contact-book-react.firebaseio.com/contacts.json', contact)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error));
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,

                config: this.state.contactForm[key]
            })
        }

        let form = (
            <form onSubmit={this.createContactHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id} 
                        name={formElement.id} 
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value} 
                        invalid={!formElement.config.valid} 
                        shouldValidate={formElement.config.validation} 
                        touched={formElement.config.touched} 
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button btnType={this.state.btnType}>{this.state.submitText}</Button>
            </form>
        );

        return (
            <div className={styles.ContactForm}>
                <h3>{this.state.title}</h3>
                {form}
                <Button btnType="CancelForm" clicked={this.props.cancel}>
                    <Plus />
                </Button>
            </div>
        );
    };
};


export default ContactForm;