//总的reducer  只承担把所有子组件中的reducer进行拆分，不进行数据处理和保存
import headReducer from './../components/head/store/headReducer';
import homeReducer from './../components/home/store/homeReducer';
import detailReducer from './../components/detail/store/detailReducer'
import {combineReducers} from 'redux';

export default combineReducers({
    head:headReducer,
    home:homeReducer,
    detail:detailReducer
})