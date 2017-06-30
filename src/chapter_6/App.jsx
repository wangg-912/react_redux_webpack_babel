import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './sources/Counter';
import MessageList from './sources/Message';


export default class App extends Component{
    render(){
        return (
            <div>
                <h1>State与Props</h1>
                <Counter />
                <h2>Props与context</h2>
                <MessageList />
            </div>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));