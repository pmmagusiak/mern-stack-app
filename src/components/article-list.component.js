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
            <div>
                <div className="table-wrapper">
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
                    <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                      Aww yeah, you successfully read this important alert message. This example
                      text is going to run a bit longer so that you can see how spacing within an
                      alert works with this kind of content.
                    </p>
                    <hr />
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

/*var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3000);*/


/*let express = require('express');
let cookieParser = require('cookie-parser');
let session = require('express-session');

let appa = express();

appa.use(cookieParser());
appa.use(session({secret: "Shh, its a secret!"}));

appa.get('/article-list', function(req, res){
    if(req.session.page_views){
       req.session.page_views++;
       res.send("You visited this page " + req.session.page_views + " times");
    } else {
       req.session.page_views = 1;
       res.send("Welcome to this page for the first time!");
    }
 });

 appa.listen(3000);*/