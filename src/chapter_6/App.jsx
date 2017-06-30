import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './sources/Counter';


export default class App extends Component{
    render(){
        return (
            <div>
                <h1>State与Props</h1>
                <Counter />
            </div>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));