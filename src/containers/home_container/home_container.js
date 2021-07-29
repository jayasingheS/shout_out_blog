import React,{Component} from "react";
import Section_one from '../../components/home-main-section-one/section_one';
import Home_component from "../../components/home-component/home_component";
import Subscribe_Section from "../../components/subscribe-section/subscribe_section";
import Footer_Section from "../../components/footer-section/footer_section";
import {connect} from "react-redux";
import {getAllPost} from "../../store/actions";
class HomeContainer extends Component{
    constructor() {
        super();
        this.state = {
          post:null,
          flip_right_left_state:true
        };
        this.ChangeFlipAndImageHandler = this.ChangeFlipAndImageHandler.bind(this);
    }

    async componentDidMount(): Promise<void> {
      await this.props.getAllPost(7);
      const newObjectArray =  await this.props.post.map(itemNew=>{
          let newOBJ = {
              ...itemNew,
              "flip": "rtl"
          };
          if (this.state.flip_right_left_state){
              newOBJ["flip"] = "rtl";
              this.setState({flip_right_left_state:false})
          } else if (!this.state.flip_right_left_state){
              newOBJ["flip"] = "ltr";
              this.setState({flip_right_left_state:true})
          }

          return newOBJ;
      })
      console.log(newObjectArray)
      await this.setState({post:newObjectArray})

    }
    ChangeFlipAndImageHandler = () => {
        return this.state.post.map(item => (
            <React.Fragment key={item.id}>
                <Home_component
                    title = {item.title}
                    flip_right_left={item.flip}
                    description={item.body}></Home_component>
            </React.Fragment>))
    }
    render() {

        return (
            <div>
                <Section_one></Section_one>
                <div>
                    {this.state.post ? (
                            this.ChangeFlipAndImageHandler()

                    ) : (
                        null
                    )}
                </div>
                <Subscribe_Section></Subscribe_Section>
                <Footer_Section></Footer_Section>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { post:state.post?.post};
};
export default connect(mapStateToProps,{getAllPost}) (HomeContainer);
