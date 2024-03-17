import React, {useState} from 'react';
import './ContactForm.module.css'

interface IProps {
    selectedCourses: string[]
}

const ContactForm: React.FC<IProps> = ({selectedCourses}: IProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isAutomaticMessage, setIsAutomaticMessage] = useState<boolean>(true);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        setIsAutomaticMessage(false)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const getMessage = () => {
        if (isAutomaticMessage && selectedCourses.length) {
            return `Hello!\n\nI want to take the following courses: ${selectedCourses.join(', ')}`
        }
        return message
    }

    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name"/>
                <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email"/>
                <textarea value={getMessage()} onChange={handleMessageChange} placeholder="Enter your message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default ContactForm;