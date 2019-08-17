import React,{Component} from 'react';
import {Botbox,Displaylist} from './../homeStyle';
import {connect} from 'react-redux';
class Leftbot extends Component{
    render(){
        return(
            <div>
                <Botbox>

                    {
                        this.props.todolist.map((item,index)=>{
                            return(
                                <Displaylist key={index}>
                                    <img src={item.imgUrl}></img>
                                    <div>
                                        <h6>{item.title}</h6>
                                        <p>{item.desc}</p>
                                    </div>
                                    
                                </Displaylist>
                            )
                        })
                    }
                </Botbox>
            </div>
        )
    }
}
const mapStore=(state)=>({
    todolist:state.home.todolist
})
export default connect(mapStore,null)(Leftbot)