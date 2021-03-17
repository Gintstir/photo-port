import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [ formState, setFormState ] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] =useState('');
    //the hook that will manage the form data, a feature of this hook is the ability 
    //to initialize the values of the state.  In this case we want to clear the input fields on the component loading.
    //thus, we'll set the initial state to empty strings to get ↑.  Above, formState will have three key value pairs to represent the three user inputs

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // This conditional says if the <input> is email, then validate
            //the value of that input field with the validateEmail function and assign its
            //return to isValid.  The consolelog the value to verify that the logic is working
            console.log(isValid);
            //isValid conditional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            } 
        } else {
            //here we are checking the message and name for element values.
            //the nested conidtional statement checks wether the values of these elements are
            //blank.  If the input vals are blank, an error message is assigned to errorMessage
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
        

        //console.log('errorMessage', errorMessage);
    }

    //console.log(formState);

    // In the preceding function we're using the setFormState function to update the formState value for the name property. We assign the value taken from the input field
    // in the UI with e.target.value and assign this value to the property formState.name.  We use the spread operator ...formState so we can retain the other key-value pairs
    // in this object.  Without the spread operator the formState object would be overwritten to only contain the name: value key pair. 

    //the name property of target in the preceding expression actually refers to the name attribut of the form element.  This attribute value matches the property names of 
    //  formState(name, email, message) and allows us to use [] to create dynamic property names.

    function handleSubmit(e) {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({ [e.target.name]: e.target.value })
            console.log("Form", formState);
        }
    };

    return (
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />                    
                </div>
                <div>
                    <label htmlFor="email">Email adress: </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />                    
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    )
    // onBlur vs OnChange - attribute will fire the event once the user has changed focus from the
    //the input field. thus allowing the user to finish their entry before validating 
    //their input
}

export default ContactForm;