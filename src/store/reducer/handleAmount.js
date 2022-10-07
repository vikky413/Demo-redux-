const handleAmount = (state = 0 , action)=> {
    if(action.type === "dabit"){
        return state - action.payload
    }
    else if(action.type === "credit") {
        return state + action.payload
    }
    else {
        return state
    }
}
export default handleAmount