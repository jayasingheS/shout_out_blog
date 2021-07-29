import React,{Component} from "react";
import './Articles.css';
import NavbarNew from "../../components/navbar/navbar";
import Articles_Container from "../../containers/articles_container/articles_container";
import Footer_Section from "../../components/footer-section/footer_section";
import Subscribe_Section from "../../components/subscribe-section/subscribe_section";

class Articles extends Component{
    constructor() {
        super();
        this.state = {

        };
    }


    render() {

        return (
            <>
                <NavbarNew></NavbarNew>
                <Articles_Container></Articles_Container>
                <Subscribe_Section></Subscribe_Section>
                <Footer_Section></Footer_Section>
            </>
        )
    }
}
export default Articles;
