import React,{Component} from 'react';
import {GoodWrap} from './goodStyle';
import scc from './../../static/back.jpeg'

class Good extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    render(){
        return(
            <div>
                <GoodWrap> 
                    <img src={scc}></img>  
                </GoodWrap>
            </div>
        )
    }
           
}
export default Good