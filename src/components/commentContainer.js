import React, {Component} from 'react';
import axios from 'axios'
import CommentBox from './commentBox';
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
                console.log(res.data)
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
            console.log(res.idArticle);
            if (this.props.commentIdArticle === res.idArticle){
            return <Comment comment={res} key={i}/>}
            else return null
        })
    }

    render() {
        return (
            <div>
                <div>
                    <CommentBox handleAddComment={this.handleAddComment} commentIdArticle={this.props.commentIdArticle}/>
                    {this.commentList()}
                </div>
            </div>
        );
    }
}