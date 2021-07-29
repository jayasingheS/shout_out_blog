import React from "react";
import './About.css';
import NavbarNew from "../../components/navbar/navbar";
import Subscribe_Section from "../../components/subscribe-section/subscribe_section";
import Footer_Section from "../../components/footer-section/footer_section";

export default function About () {
        return (
           <>
               <NavbarNew></NavbarNew>
               <div className='flex-container_section '>
                   <div>
                       <h2>Hello! I'm BLACK JS, I Provide Newest News Update About Digital</h2>
                       <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                           It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                           Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                           there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                           a large language ocean.
                           Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                           there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                           a large language ocean..</p>
                   </div>
               </div>
               <Subscribe_Section></Subscribe_Section>
               <Footer_Section></Footer_Section>
           </>
        )
    }


