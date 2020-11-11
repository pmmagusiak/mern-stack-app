import React, {Component} from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CommentBox extends Component {
    
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this)
    }

    
    addComment(e) {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const comment = e.target.comment.value.trim();
        const idArticle = this.props.commentIdArticle
        
        if (name && comment) {
            
            const commentObject = {name, comment, idArticle}
            
            this.props.handleAddComment(commentObject);
            
            axios.post('http://localhost:5000/articles/read-panel/create-comment', commentObject)
                .then(res => console.log(res.data));

            e.target.name.value = '';
            e.target.comment.value = '';
        }
    }

    render() {
        return (
            <Form onSubmit={this.addComment}>
                <p>KINDLY LEAVE YOUR THOUGHTS BELOW</p>

                <Form.Group controlId="CommentatorID">
                    <Form.Control size="sm" type="text" name="name" placeholder="Your name"/>
                </Form.Group>

                <Form.Group controlId="Comment">
                    <Form.Control size="sm" type="text" name="comment" placeholder="Add a comment"/>
                </Form.Group>

                <Button variant="primary" size="sm" type="submit">
                    Submit
                </Button>
            </Form>

        );
    }

}
