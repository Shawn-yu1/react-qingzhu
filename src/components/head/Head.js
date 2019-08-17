import {HeadWrap,ImgWrap,Nav,NavFont,InputBox,Input,List,Listli} from './headStyle';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as headActionCreaters from './store/headActionCreaters';

import {HashRouter as Router,Link,Route } from "react-router-dom";
import Detail from './../detail/detail';
import Home from '../home/Home';
const Inputblock = (show)=>{
   if(show){
       return(
        <List>  
        <Listli>家电促销甩卖</Listli> 
        <Listli>清仓甩卖大流血</Listli> 
        <Listli>点击选择时尚资讯</Listli> 
        <Listli>这就是街舞独家赞助品牌</Listli> 
        <Listli>耐克中国，等你来战</Listli> 
        </List>
       )
   }else{
       return null
   }
}
// class Head extends Component{
//     render(){
//         const {flag,inputFocus,inputBlur} = this.props;
//         return(
//             <div>
//                 <HeadWrap>
//                    <ImgWrap></ImgWrap>
//                    <Nav>
//                         <NavFont>首页</NavFont>
//                         <NavFont>详情页</NavFont>
//                         <NavFont>列表页面</NavFont>
//                    </Nav>
//                     <InputBox>
//                     <Input
//                     className={flag?'fuck':''}
//                     onFocus={inputFocus}
//                     onBlur={inputBlur}
//                     />
//                      <i className='glyphicon glyphicon-search'></i>
//                      {Inputblock(flag)}
//                     </InputBox>
//                 </HeadWrap> 
//             </div>
//         )
//     }
// }

function Head(props){
    const {flag,inputFocus,inputBlur} = props;
    return(
        <div>
            <HeadWrap>
               <ImgWrap></ImgWrap>
               <Router>
                    <Nav>
                            <NavFont><Link to='/home'>首页</Link> </NavFont>
                            <NavFont><Link to='/detail'>详情页</Link> </NavFont>
                            <NavFont><Link to='/'>列表页面</Link></NavFont>
                    </Nav>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/detail' component={Detail}></Route>
               </Router>
                <InputBox>
                <Input
                className={flag?'fuck':''}
                onFocus={inputFocus}
                onBlur={inputBlur}
                />
                 <i className='glyphicon glyphicon-search'></i>
                 {Inputblock(flag)}
                </InputBox>
            </HeadWrap> 
        </div>
    )
}

const mapState = (state)=>({
    flag:state.head.flag  //拆分后的state变为外层最大对象
})
const mapDispatch= (dispatch)=>({
    inputFocus(){
        // const action  = {
        //     type:'input_focus'
        // }
        dispatch(headActionCreaters.handleFocus())
    },
    inputBlur(){
        // const action  = {
        //     type:'input_blur'
        // }
        dispatch(headActionCreaters.handleBlur())
    }

})
export default connect(mapState,mapDispatch)(Head);