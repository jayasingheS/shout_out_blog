import React,{Component} from "react";
import './Home.css';
import NavbarNew from "../../components/navbar/navbar";
import HomeContainer from "../../containers/home_container/home_container";
class Home extends Component{

    render() {

        return (
         <div>
             <NavbarNew></NavbarNew>
             <HomeContainer></HomeContainer>
         </div>
        )
    }
}
export default Home;
