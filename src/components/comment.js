import React, {Component} from 'react';
import axios from 'axios'
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
                    <div><br/>
                        <strong>{this.props.comment.name}</strong>
                        <br/> {this.props.comment.comment}<br/>
                        <Button onClick={this.deleteComment} className="btn1" variant="danger">Delete</Button>
                    </div>
        );
    }
}