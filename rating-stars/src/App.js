import React from 'react';
import './App.css';
import Comment from './components/comment/comment';
import AddComment from './components/addComment/addComment';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.commentHandler = this.handleComment.bind(this)
        this.voteHandler = this.handleVote.bind(this)
        this.addCommentHandler = this.handleAddComment.bind(this)
        this.state = {
            comments: [],
            commentValue: "",
            vote: 0,
        };
    }

    handleComment = (e) => {
        this.setState({
            commentValue: e.target.value
        });
    }

    handleVote = (value) => {
        this.setState({
            vote: value
        });
    }

    handleAddComment = () => {
        const newState = this.state;

        newState.comments.push({
            text: this.state.commentValue,
            vote: this.state.vote
        });
        newState.commentValue = "";
        newState.vote = 0;

        this.setState({
            ...newState
        });
    }

    render() {
        return (
            <div className="App">
                <Comment comments={this.state.comments}/>
                <AddComment
                    stateValue={this.state}
                    voteHandler={this.voteHandler}
                    commentHandler={this.commentHandler}
                    handleAddComment={this.addCommentHandler}
                />
            </div>
        )

    }
}

export default App;
