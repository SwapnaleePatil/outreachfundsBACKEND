export default (state=[],action)=>{
    switch(action.type){
        case "REGISTER_STUDENT":
            return [...state,action.payload];
        default:
            return state;
    }
}
