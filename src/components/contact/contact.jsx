import React from "react";
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qtue0k1', 'template_ooyo9bn', form.current, 'Hksy3AHDjbn22buB1');
    
        e.target.reset();

    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>dulatmenol@gmail.com</h5>
                        <a href="mailto:dulatmenol@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>dulattutorials</h5>
                        <a href="https://m.me/" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+7 (778) 798-20-98</h5>
                        <a href="https://api.whatsapp.com/send?phone=+77787982098" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="text" name="email" placeholder="Your Email" required/>
                    <textarea name="message" cols="30" rows="7" placeholder="Your Message"></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact