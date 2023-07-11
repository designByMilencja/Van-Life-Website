import React from "react";
import {contacts} from "../constants/index.js";
import ContactCard from "./ContactCard.jsx";
import styles, {layout} from "../style.js";

export const Contact = () => {
    return (
        <section id="contacts" className={`${layout.section}`}>
            <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 m-5 md:mt-0 mt-10 relative flex-row`}>
                {contacts.map((contact, index) => (
                    <ContactCard key={contact.id} icon={contact.icon} title={contact.title} index={index} />))}
            </div>
        </section>
)
}
export default Contact
