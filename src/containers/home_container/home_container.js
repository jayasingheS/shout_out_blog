import React,{Component} from "react";
import SectionOne from '../../components/home-main-section-one/SectionOne';
import HomeComponent from "../../components/home-component/HomeComponent";
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
                <HomeComponent
                    title = {item.title}
                    flip_right_left={item.flip}
                    description={item.body}></HomeComponent>
            </React.Fragment>))
    }
    render() {

        return (
            <div>
                <SectionOne></SectionOne>
                <div>
                    {this.state.post ? (
                            this.ChangeFlipAndImageHandler()

                    ) : (
                        null
                    )}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { post:state.post?.post};
};
export default connect(mapStateToProps,{getAllPost}) (HomeContainer);
