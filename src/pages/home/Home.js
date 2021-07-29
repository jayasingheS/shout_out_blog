import React,{Component} from "react";
import './Home.css';
import NavbarNew from "../../components/navbar/navbar";
import HomeContainer from "../../containers/home_container/home_container";
import Subscribe_Section from "../../components/subscribe-section/subscribe_section";
import Footer_Section from "../../components/footer-section/footer_section";
class Home extends Component{

    render() {

        return (
         <div>
             <NavbarNew></NavbarNew>
             <HomeContainer></HomeContainer>
             <Subscribe_Section></Subscribe_Section>
             <Footer_Section></Footer_Section>
         </div>
        )
    }
}
export default Home;
