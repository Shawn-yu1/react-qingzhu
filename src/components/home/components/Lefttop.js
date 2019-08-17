import React,{Component} from 'react';
import {LeftBox,Picbox} from './../homeStyle';
import {connect} from 'react-redux';

class Lefttop extends Component{
    render(){
        return(
            <div>
                <LeftBox>
                    <img src='//asset.ibanquan.com/s/30611/586/index_slide_3?v=1552557703_1561734095'></img>
                    {
                        this.props.list.map((item,index)=>{
                            return(
                                <Picbox key={index}>
                                    <img src={item.imgUrl}></img>
                                    <span>{item.txt}</span>
                                </Picbox>
                            )
                        })
                    }
                </LeftBox>
            </div>
        )
    }
}

const mapState=(state)=>(
    {
    list:state.home.list
})
export default connect(mapState,null)(Lefttop)