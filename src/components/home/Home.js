import React,{Component} from 'react';
import {HomeWrap,HomeLeft,HomeRight} from './homeStyle';
import Lefttop from './components/Lefttop'
import Leftbot from './components/Leftbot'
import Righttop from './components/Righttop'
import Rightbot from './components/Rightbot'
import axios from 'axios';
import {connect} from 'react-redux'
class Home extends Component{
    render(){
        return(
            <div>
                <HomeWrap>
                    <HomeLeft>
                        <Lefttop></Lefttop>
                        <Leftbot></Leftbot>
                    </HomeLeft>
                    <HomeRight>
                        <Righttop></Righttop>
                        <Rightbot></Rightbot>
                    </HomeRight>
                </HomeWrap>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/getHomeList.json').then((res)=>{
            const nums = res.data.data;
            this.props.getHomeList(nums)
        })
        
    }
}

const mapDispatch=(dispatch)=>({
    getHomeList(nums){
        const action={
            type:'get_home_list',
            nums
        }
        dispatch(action)
    }
})
export default connect(null,mapDispatch)(Home)