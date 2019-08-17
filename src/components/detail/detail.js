import React,{Component} from 'react';
import {DatWrap,Dattop} from './detailStyle';
import Datmid from './components/datmid';
import Datbottom from './components/datbottom';
import axios from 'axios';
import {connect} from 'react-redux';

class Detail extends Component{
    render(){
        return(
            <div>
                <DatWrap>
                    <Dattop>
                        <img src='//asset.ibanquan.com/s/30611/586/index_slide_2?v=1552557703_1562142957'/>
                    </Dattop>
                    <Datmid></Datmid>
                    <Datbottom></Datbottom>
                </DatWrap>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/getHomeList.json').then((res)=>{
            const imp = res.data.data;
            this.props.getMyList(imp)
        })
    }
}
const mapDispatch=(dispatch)=>({
   getMyList(imp){
       const action={
            type:'get_my_list',
            imp
       }
       dispatch(action)
   }
})


export default connect(null,mapDispatch)(Detail)  ;
