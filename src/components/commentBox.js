import React, {Component} from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CommentBox extends Component {
    
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);
        
    }
    
    addComment(e) {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const comment = e.target.comment.value.trim();
        
        if (name && comment) {
            
            const commentObject = {name, comment}
            
            this.props.handleAddComment(commentObject);
            
            axios.post('http://localhost:5000/articles/read-panel/create-comment', commentObject)
                .then(res => console.log(res.data));

            e.target.name.value = '';
            e.target.comment.value = '';
        }
    }

    /*axios.put('http://localhost:5000/articles/update-article/'
            + this.props.match.params.id, article)
            .then(res => {
                console.log(res.data)
                console.log('Updated!')
            }).catch(error => {
            */

    render() {
        return (
            <Form onSubmit={this.addComment}>
                <h1>Kindly leave your thoughts below</h1>

                <Form.Group controlId="CommentatorID">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your name"/>
                </Form.Group>

                <Form.Group controlId="Comment">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" name="comment" placeholder="Add a comment"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        );
    }

}
