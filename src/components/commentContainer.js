import React, {Component} from 'react';
import CommentBox from './commentBox';
import axios from 'axios'
import Comment from './comment'

export default class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.handleAddComment = this.handleAddComment.bind(this);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/articles/comments')
            .then(res => {
                this.setState({
                    comments: res.data
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleAddComment(comment) {
        this.setState(prevState => {
            return {
                comments: prevState.comments.concat(comment)
            };
        });
    }

    commentList() {
        return this.state.comments.map((res, i) => {
            return <Comment comment={res} key={i}/>
        })

    }

    render() {
        return (
            <div>
                <div>
                    <CommentBox handleAddComment={this.handleAddComment}/>
                    {this.commentList()}
                </div>
            </div>
        );
    }
}