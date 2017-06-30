import React,{Component,PropTypes} from 'react';

var Content = (props)=> {return <p>Content组件的props.value：{props.value}</p>;}


Content.PropTypes={
    value:PropTypes.number.isRequired
}


export default class Counter extends Component{
    constructor(){
        super();
        this.state = {"value":0}
    }
    render(){
        let reduce = ()=>{
            if(this.state.value > 0){
                this.setState({
                    value:this.state.value -1
                })
            }else{
                this.setState({
                    value:0
                })
            }
        }
        return(
            <div>
                <button onClick = {()=>this.setState({value:this.state.value + 1})}>累加</button>
                <button onClick = {reduce}>累减</button>
                <br />
                Counter 内部状态
                <pre>{JSON.stringify(this.state)}</pre>
                <Content value={this.state.value}/>
            </div>
        )
    }
}