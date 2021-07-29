import React,{Component} from "react";
import Article_Card from "../../components/article-card/article_card";
import {connect} from "react-redux";
import {getAllPost} from "../../store/actions";

class Articles_Container extends Component{
    constructor() {
        super();
        this.state = {
            post:null,
        };
     this.CardArticle = this.CardArticle.bind(this)
    }

    async componentDidMount(): Promise<void> {
        await this.props.getAllPost(30 );
        await this.setState({post:this.props.post})
    }

    CardArticle = () => {
        return this.state.post.map(item => (
            <React.Fragment key={item.id}>
                <Article_Card
                    title = {item.title}
                    description={item.body}></Article_Card>
            </React.Fragment>))
    }

    render() {

        return (
            <div className="containerCard" style={{marginTop:"10%"}}>

                    {this.state.post ? (
                        this.CardArticle()
                    ) : (
                        null
                    )}

            </div>
        )
    }
}
const mapStateToProps = state => {
    return { post:state.post?.post};
};
export default connect(mapStateToProps,{getAllPost}) (Articles_Container);
