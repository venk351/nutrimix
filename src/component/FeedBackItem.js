export default function FeedBackItem({ dispatch, feedback, id }) {
  return (
    <div>
          <ul><li key={Math.random()} className="feedback-item">
            <h1>{feedback.title}</h1>
            <p>{feedback.FeedBack}</p>
            <h2>{feedback.Rating}</h2>
            <div>
                <button style={{"backgroundColor":"white", "margin":"30px"}} onClick={()=>{dispatch({type:"DELETE_FEEDBACK", payload:{id}})}}>Delete</button>
                <button style={{"backgroundColor":"white", "margin":"30px"}} >Edit</button>
            </div>
          </li></ul>
    </div>
  );
}
