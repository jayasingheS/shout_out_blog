import React,{Component} from 'react';
import './form_submition.css'
import {connect} from "react-redux";
import {PostSubmit} from "../../store/actions";
class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            id: null,
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.props.PostSubmit(this.state)
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render() {
        return (
            <div className="containerForm">
                <form onSubmit={this.mySubmitHandler}>
                    <h1>Create New Blog Post</h1>
                    <p>Post Title</p>
                    <input
                        type='text'
                        name='title'
                        onChange={this.myChangeHandler}
                    />
                    <p>Post Description</p>
                    <input
                        type='text'
                        name='description'
                        onChange={this.myChangeHandler}
                    />
                    <p>User Id</p>
                    <input
                        type='number'
                        name='id'
                        onChange={this.myChangeHandler}
                    />
                    <br/>
                    <br/>
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

export default  connect(null,{PostSubmit})(FormSubmit);

