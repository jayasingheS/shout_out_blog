import React from "react";
import './Contact.css';
import NavbarNew from "../../components/navbar/navbar";
import Subscribe_Section from "../../components/subscribe-section/subscribe_section";
import Footer_Section from "../../components/footer-section/footer_section";

export default function Contact () {
    return (
        <>
            <NavbarNew></NavbarNew>
            <div className='flex-container_section '>
                <div>
                    <p>Address: 198 West 21th Street,</p>
                    <p>Suite 721 New York NY 10016</p>
                </div>
                <div>
                    <p>Phone: + 1235 2355 98</p>
                </div>
                <div>
                    <p>Email: shehan@gmail.com</p>
                </div>
                <div>
                    <p>Website BlackJs.com</p>
                </div>
            </div>
            <Subscribe_Section></Subscribe_Section>
            <Footer_Section></Footer_Section>
        </>
    )
}
