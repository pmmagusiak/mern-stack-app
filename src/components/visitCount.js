import React, {Component} from "react"
import countapi from 'countapi-js';

export default class VisitCount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visits: []
        }
    }

    componentDidMount() {
        countapi.visits().then(res => {
            this.setState({
                visits: res.value
                
            })
          })
          .catch((error) => {
              console.log(error)
          })
    }



    render(){
        return (<span>{this.state.visits}</span>)
    }

}