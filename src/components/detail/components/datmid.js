import React,{Component} from 'react';
import {Datmidbox} from './../detailStyle';
import {connect} from 'react-redux';
class  Datmid extends Component{
    render(){
        return(
            <div>
                    <Datmidbox>
                        {
                            this.props.mylist.map((item,index)=>{
                                return(
                                    <p key={index}>{item.title}</p>
                                )
                            })
                        }
                    </Datmidbox>
            </div>
        )
    }
}
const mapState=(state)=>({
    mylist:state.detail.mylist
})
export default connect(mapState,null)(Datmid) 