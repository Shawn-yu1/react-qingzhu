const defaultState={
    // list:[
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_3?v=1552557703_1560932666", "txt":"青竹"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_4?v=1552557703_1560932666", "txt":"良品"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_5?v=1552557703_1560932666", "txt":"设计"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_6?v=1552557703_1560932666", "txt":"生活"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_7?v=1552557703_1560932666", "txt":"品质"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_3?v=1552557703_1560932666", "txt":"青竹"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_4?v=1552557703_1560932666", "txt":"良品"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_5?v=1552557703_1560932666", "txt":"设计"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_6?v=1552557703_1560932666", "txt":"生活"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_7?v=1552557703_1560932666", "txt":"品质"}
    // ],
    // todolist:[
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_3?v=1552557703_1560932666","title":"天草陶石咖啡杯套装","desc":"使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_4?v=1552557703_1560932666","title":"天草陶石咖啡杯套装","desc":"使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_5?v=1552557703_1560932666","title":"天草陶石咖啡杯套装","desc":"使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_6?v=1552557703_1560932666","title":"天草陶石咖啡杯套装","desc":"使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_7?v=1552557703_1560932666","title":"天草陶石咖啡杯套装","desc":"使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化"}
    // ],
    // fineList:[
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_3?v=1552557703_1560932666","title":"自然生活，精选用料"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_4?v=1552557703_1560932666","title":"自然生活，精选用料"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_5?v=1552557703_1560932666","title":"自然生活，精选用料"},
    //     {"imgUrl":"//asset.ibanquan.com/s/30611/586/index_global1_pic_7?v=1552557703_1560932666","title":"自然生活，精选用料"}
    //   ],
    //   scanList:[
    //     {"title":"9 款高颜值饭盒推荐"},
    //     {"title":"养成七种整理习惯"},
    //     {"title":"年度盘点｜ Top20"},
    //     {"title":"9 款高颜值饭盒推荐"},
    //     {"title":"养成七种整理习惯"},
    //     {"title":"年度盘点｜ Top20"}
    //   ]
    list:[],
    todolist:[],
    fineList:[],
    scanList:[]
};

export default (state=defaultState,action)=>{
    if(action.type==='get_home_list'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list=action.nums.topicList
        newState.todolist=action.nums.list
        newState.fineList=action.nums.fineList
        newState.scanList=action.nums.scanList
        return newState
    }
    return state
}