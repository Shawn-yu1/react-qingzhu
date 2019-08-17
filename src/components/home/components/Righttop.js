import React,{Component} from 'react';
import {Rightbox,ImgBox} from './../homeStyle';
import {connect} from 'react-redux';
import img1 from './../../../static/wb1.jpg'
import img2 from './../../../static/wb2.jpg'
class Righttop extends Component{
    render(){
        return(
            <div>
               <Rightbox>
                   {
                       this.props.fineList.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <img src={item.imgUrl}></img>
                                    <p>{item.title}</p>
                                </div>
                            )
                       })
                   }
                    <img className='img1' src={img1}></img>
                    <img className='img2' src={img2}></img>
               </Rightbox>
            </div>
        )
    }
}
const mapState=(state)=>({
    fineList:state.home.fineList
})
export default connect(mapState,null)(Righttop)