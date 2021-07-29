import React,{Component} from 'react';
import FormSubmit from "../../components/form-submition/form_submition";
import NavbarNew from "../../components/navbar/navbar";
import Footer_Section from "../../components/footer-section/footer_section";
class Submit extends Component {

    render() {
        return (
          <>
              <NavbarNew></NavbarNew>
              <FormSubmit></FormSubmit>
              <Footer_Section></Footer_Section>
          </>
        );
    }
}


export default Submit;
