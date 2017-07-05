import React,{Component} from 'react';

const suffix = "被调用，this指向：";

export default class App extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(`componentDidMount${suffix}`,this);
    }
    componentWillReceiveProps(){
        console.log(`componentWillReceiveProps${suffix}`,this);
        
    }
    shouldComponentUpdate(){
         console.log(`shouldComponentUpdate${suffix}`,this);
        
    }
    componentDidUpdate(){
         console.log(`componentDidUpdate${suffix}`,this);
        
    }
    componentWillUnmount(){
         console.log(`componentWillUnmount${suffix}`,this);
    }
    handler(){
         console.log(`handler${suffix}`,this);
    }
    render(){
        console.log(`render${suffix}`,this);
        this.handler();
        window.handler= this.handler;
        window.handler();

        return(
            <div>
            <h1 onClick={this.handler}>Hello World！</h1>
            <p>不清楚组件，reactElement,组件实例以及组件中的this是什么，打开控制台看一下！</p>
            </div>
        )
    }
} 