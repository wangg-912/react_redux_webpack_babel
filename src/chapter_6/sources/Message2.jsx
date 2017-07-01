import React,{Component,PropTypes} from 'react';

let Button = (props,context)=>{
    return(
        <button style={{background:context.color}}>
            {props.children}
        </button>
    )
}
Button.propTypes = {
    children:PropTypes.string.isRequired
}
Button.contextTypes={
    color:PropTypes.string.isRequired
}


let Message = (props)=>{
    return(
        <li>
            {props.text}<Button>删除</Button>
        </li>
    )
}
Message.propTypes={
    "text":PropTypes.string.isRequired
}

class MessageList extends Component{
    getChildContext(){
        return {"color":"gray"}
    }
    render(){
        const messages = [
            {"text":"Hello Wanggang"},
            {"text":"Hello EveryBody"}
        ];
        const children = messages.map((message,key)=>
            <Message text={message.text} key ={key} />
        )
        return(<div>
            <p>通过context将color跨级传递给里边的Button组件</p>
            <ul>
                {children}
            </ul>
        </div>)
    }
}

MessageList.childContextTypes={
    color:PropTypes.string.isRequired
}

export default MessageList;