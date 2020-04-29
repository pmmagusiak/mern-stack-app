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

    /*componentDidMount() {
        axios.get('http://localhost:5000/articles/read-panel/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    author: res.data.author,
                    content: res.data.content
                });
            })
            .catch(error => {
                console.log(error)
            })
    }*/

    /*dataTable() {
        return this.state.articles.map((res, i) => {
            return <ArticleTableRow obj={res} key={i}/>;
        });
    }*/

    /*componentDidMount() {
        /*global Ably*/
        /*const channel = Ably.channels.get('comments');
      
        channel.attach();
          channel.once('attached', () => {
            channel.history((err, page) => {
              // create a new array with comments only in an reversed order (i.e old to new)
              const comments = Array.from(page.items, item => item.data)
      
              this.setState({ comments });
      
              channel.subscribe((msg) => {
                const commentObject = msg.data;
                this.handleAddComment(commentObject);
              })
            });
          });
      }*/

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




/*{this.props.comments.map((res, i) => {
                    return <Comment key={i} comment={res}/>
                    <Comment comments={this.state.comments}/>
                })*/