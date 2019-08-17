const defalutState = {
    mylist:[]
}

export default (state=defalutState,action)=>{
    if(action.type==='get_my_list'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.mylist=action.imp.mylist;
        return newState
    }
 
    return state
}