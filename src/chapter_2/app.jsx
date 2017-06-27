import React from 'react';
export default class App extends React.Component{
    render(){
        //throw new Error();
        let _value = 'Hello World!';
        let arr = [
            <p>香蕉</p>,
            <p>苹果</p>
        ]
        return(
            <div>
            <h1 className={_value?"class-a":"class-b"}>{_value}</h1>
            <p style={{color:'red',fontSize:'14px'}}>我是王刚</p>
            {arr}
            </div>
        )
    }
}