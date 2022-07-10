import React from "react";
import {pageAnimation} from "../animation";
import { motion } from "framer-motion";
import IMG_5196 from "../images/IMG_5196.jpg";
import axios from "axios";
import {FormEvent, ChangeEvent} from "react";
import {useState} from "react";

type FormState = {
    name: string;
    email: string;
    message: string;
}

type ServiceMessage = {
    class: string;
    text: string;
}

const Contact = () => {

    const formId = 'Io6cEvZV';
    const formSparkUrl =`https://submit-form.com/${formId}`;

    const initialFormState = {
        name: '',
        email: '',
        message: '',
    }

    const [formState, setFormState] = useState(initialFormState);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState();

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    }
    
    const postSubmission = async () => {
        const payload = { 
            ...formState,
        };

        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setMessage({ text: "Thanks, I will be in contact with you ASAP!"});
            setFormState(initialFormState);
            }catch(error) {
            console.log(error);
            setMessage({ text: "Sorry, there was a problem!"}); 
        }
    };

    const updateFormControl = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { id, value } = event.target;
        const key = id;
        const updatedFormState = { ...formState };
        updatedFormState[key] = value;
        setFormState(updatedFormState);
      };

    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <div className="pic-container">
                <div className="image-container">
                <h1 className="contact-text">Contact</h1>
                {message && (
                <div className="Message-response">
                     {message.text}
                </div>
                 )}
                <img className="contact-pic" src={IMG_5196} alt="me" />
                </div>
                <form onSubmit={submitForm} name="form" action="submit">
                    <input type="text" name="name" id="name" placeholder="Name" value={formState.name} onChange={updateFormControl} required/>
                    <input type="text" name="email" id="email" placeholder="Email" value={formState.email} onChange={updateFormControl} required />
                    <textarea type="text" name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message Here" value={formState.message} onChange={updateFormControl} required></textarea>
                    <button disabled={submitting} type="submit" name="button">{submitting ? "Submitting..." : "Submit"}</button>
                </form>
            </div>
        </motion.div>

    )
}

export default Contact;