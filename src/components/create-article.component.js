import React, {Component} from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => (val.length > 1 || val==='') && (valid=false)
    );
    return valid;
}


export default class CreateArticle extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            author: '',
            content: '',
            errors: {
                title: '',
                author: '',
                content: ''
            }
        }
    }

    

    onChange(e) {
        e.preventDefault();
        const {name, value} = e.target;
        let errors = this.state.errors;

        switch (name) {
            case 'title':
                errors.title =
                value.trim().length < 5 || value.trim().length > 100 || value === ''
                ? 'Title must be between 5 and 100 characters long!'
                :' '; 
                break;
            case 'author':
                errors.author =
                validEmailRegex.test(value) || e.target.value === ''
                ?' '
                :'Email is not valid!'
                break;
            case 'content':
                errors.content =
                value.trim().length < 50 || value.trim().length > 5000 || e.target.value === ''
                ? 'Article must be between 50 and 5000 characters long!'
                :' ';
                break;
            default:
                break;
        }

        this.setState({errors, [name]:value}, ()=>{
            console.log(errors)
            
        })
    }

    onSubmit(e) {
        e.preventDefault()

        if(validateForm(this.state.errors)){
            console.info('Valid form')
            const article = {
                title: this.state.title,
                author: this.state.author,
                content: this.state.content,
            };
    
            axios.post('http://localhost:5000/articles/create-article', article)
                .then(res => console.log(res.data));
    
    
            this.setState({
                title: '',
                author: '',
                content: ''
            })

            window.location.assign("/article-list")

        }else{
            console.error('Invalid form')
        }
    }


    render() {
        const {errors} = this.state;
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.onChange}/>
                    {errors.title.length > 0 &&
                    <span className='error'>{errors.title}</span>}
                </Form.Group>

                <Form.Group controlId="Author">
                    <Form.Label>Author email</Form.Label>
                    <Form.Control type="text" name="author" onChange={this.onChange}/>
                    {errors.author.length > 0 &&
                    <span className='error'>{errors.author}</span>}
                </Form.Group>

                <Form.Group controlId="Content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows="10" type="text" name="content" onChange={this.onChange}/>
                    {errors.content.length > 0 &&
                    <span className='error'>{errors.content}</span>}
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    CREATE ARTICLE
                </Button>
                
            </Form>
        </div>);
    }
}
