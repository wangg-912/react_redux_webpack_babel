import React,{Component,PropTypes } from 'react';
var Button = (props)=>{
    return (
        <button style={{border:"none",background:props.color}}>
        {props.children}
        </button>
    )
}
Button.propTypes  = {
    color:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}
var Message = (props)=>{
    return(
        //将得到的配置传递给Button组件
        <li>
            {props.text} <Button color={props.color}>删除</Button>
        </li>
    )
}
Message.propTypes = {
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}
export default class MessageList extends Component{
    render(){
        const color = 'gray';
        const messages = [
            {text: 'Hello React'},
            {text: 'Hello Redux'}
        ];
        // Map遍历生成Message组件并把对象传递给Message
        const children  = messages.map((message,key)=>
            <Message key = {key} text = {message.text} color={color} />
        )
        
        return(
            <div>
            <p>通过props将color逐层传递给里面的Button组件</p>
            <ul>
                {children}
            </ul>
            </div>
        )
    }
}