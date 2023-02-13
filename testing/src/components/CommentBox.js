import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

    state = { comment: '' };

    componentDidMount(){
        this.shouldNavigateAway();
    }

    componentDidUpdate(){
        this.shouldNavigateAway();
    }

    shouldNavigateAway(){
        if (!this.props.auth){
            console.log('I NEED TO LEAVE!!!');
        }
    }

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' })
    };

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button onClick={this.props.fetchComments} className='fetch-comments-btn'>Fetch Comments</button>
            </Fragment>
        );
    };
}

function mapStateToProps(state){
    return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(CommentBox);