import React, {Component} from 'react';
import axios from 'axios'
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button'


export default class Comment extends Component {

    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment(e) {
        e.preventDefault();
        axios.delete('http://localhost:5000/articles/read-panel/delete-comment/:id' + this.props.comment._id)
            .then((res) => {
                console.log('Deleted!')
            }).catch((error) => {
                console.log(error)
        })
        this.forceUpdate();
        window.location.reload();
    }



    render() {
        return (
            <Figure>
                <p>
                    <div>
                        <strong>{this.props.comment.name}</strong>
                        <br/> {this.props.comment.comment}
                        <Button onClick={this.deleteComment} size="sm" variant="danger">Delete</Button>
                    </div>
                </p>
            </Figure>
        );
    }
}
