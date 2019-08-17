import React,{Component} from 'react';
import {RBbox} from './../homeStyle';
import {connect} from 'react-redux';
class Rightbot extends Component{
    render(){
        return(
            <div>
                <RBbox>
                    <h3>排行榜</h3>
                    {
                        this.props.scanList.map((item,index)=>{
                            return(
                                <p key={index}>{item.title}</p>
                            )
                        })
                    }
                </RBbox>
            </div>
        )
    }
}

const mapState=(state)=>({
    scanList:state.home.scanList
})
export default connect(mapState,null)(Rightbot)