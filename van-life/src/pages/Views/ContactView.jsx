import React from "react";
import {contacts} from "../../constants/index.js";
import ContactCard from "../../components/common/ContactCard.jsx";
import styles from "../../style.js";

export const ContactView = () => {
    return (
        <section id="contacts">
            <div className={`flex-1 flex ${styles.flexCenter} md:mt-0 mt-10 relative flex-row flex-wrap`}>
                {contacts.map((contact) => (
                    <ContactCard key={contact.id} icon={contact.icon} title={contact.title} href={contact.href}/>))}
            </div>
        </section>
)
}
export default ContactView
