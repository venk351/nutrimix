export default function feedBackReducer(state, action){
    switch(action.type){
        case "ADD_FEEDBACK":
            return {...state, feedBackList:[...state.feedBackList, action.payload]}
        case "UPDATE_FEEDBACK":
            return {...state, feedBackList: state.feedBackList.map((feedback)=>(
                feedback.id===action.payload.id
            ))}
        case "DELETE_FEEDBACK":
            return {...state, feedBackList:state.feedBackList.filter((feedback)=>(
                feedback.id !== action.payload.id
            ))}
        case "SET_EDITING_TICKET":
            return {
                ...state, editingFeedBack : action.payload
            }
        default:
            return "DEFAULT_FEEDBACK"
    }
}