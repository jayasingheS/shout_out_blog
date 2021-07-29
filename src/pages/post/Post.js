import React,{Component} from "react";
import './Post.css';
import NavbarNew from "../../components/navbar/navbar";
import Footer_Section from "../../components/footer-section/footer_section";
import Home_component from "../../components/home-component/home_component";
import {connect} from "react-redux";
import { getOnePost} from "../../store/actions";


class Post extends Component{
    constructor() {
        super();
        this.state = {
          post_id:null
        };
    }

    async componentDidMount(): Promise<void> {
        await this.props.getOnePost(this.props.match?.params?.id,false);
        await this.setState({post_id:this.props?.post_id.post_ID})

    }
    render() {

        return (
            <>
                <NavbarNew></NavbarNew>
                <div style={{marginTop:"7%",marginBottom:"10%"}}>
                    {this.state.post_id ? (
                        <Home_component
                            title = {this.state.post_id.title }
                            flip_right_left={"rtl"}
                            description={this.state.post_id.body }></Home_component>
                    ) : (
                        null
                    )}
                </div>
                <Footer_Section></Footer_Section>
            </>
        )
    }
}
const mapStateToProps = state => {
    return { post_id:state.post_id};
};
export default connect(mapStateToProps,{getOnePost}) (Post);
