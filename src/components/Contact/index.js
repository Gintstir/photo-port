import React, { useState } from 'react';

function ContactForm() {

    const [ formState, setFormState ] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    //the hook that will manage the form data, a feature of this hook is the ability 
    //to initialize the values of the state.  In this case we want to clear the input fields on the component loading.
    //thus, we'll set the initial state to empty strings to get ↑.  Above, formState will have three key value pairs to represent the three user inputs

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    //console.log(formState);

    // In the preceding function we're using the setFormState function to update the formState value for the name property. We assign the value taken from the input field
    // in the UI with e.target.value and assign this value to the property formState.name.  We use the spread operator ...formState so we can retain the other key-value pairs
    // in this object.  Without the spread operator the formState object would be overwritten to only contain the name: value key pair. 

    //the name property of target in the preceding expression actually refers to the name attribut of the form element.  This attribute value matches the property names of 
    //  formState(name, email, message) and allows us to use [] to create dynamic property names.

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />                    
                </div>
                <div>
                    <label htmlFor="email">Email adress: </label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />                    
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;