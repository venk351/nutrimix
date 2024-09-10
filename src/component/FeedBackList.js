import FeedBackItem from "./FeedBackItem"

export default function FeedBackList({dispatch, feedBackList}){
    return(
        <div>
            <h1>All FeedBacks</h1>
            {feedBackList.map((feedback)=>(<FeedBackItem key={Math.random()} id={feedback.id} feedback={feedback} dispatch={dispatch}></FeedBackItem>))}
        </div>
    )
}