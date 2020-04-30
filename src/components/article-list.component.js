import React, {Component} from "react"
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import ArticleTableRow from './articleTableRow'
import VisitCount from './visitCount'


export default class ArticleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/articles/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    dataTable() {
        return this.state.articles.map((res, i) => {
            return <ArticleTableRow obj={res} key={i}/>;
        });
    }

    visitCount() {
        return <VisitCount/>
    }
    
    

    render() {
        return (
            <div className="d-flex flex-column justify-content-between articleList"> 
                <div>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Content</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Alert variant="light">
                    <p className="mb-0">
                        You are {''}
                        <Badge variant="info">{this.visitCount()}</Badge> {''}
                        visitor on this site.
                    </p>
                  </Alert>
                </div>
            </div>
        )
    }

}