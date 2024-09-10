import React, { useEffect, useState } from "react";
import FeedBackList from "./FeedBackList";

export default function FeedBack({ dispatch, feedBackList }) {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("1");
  const [title, setTitle] = useState("");
  const clearForm = () => {
    setTitle("")
    setFeedback("");
    setRating("1");
  };
  useEffect(() => {
    if (feedBackList.length > 0) {
      setFeedback(feedBackList.feedback);
      setRating(feedBackList.rating);
    } else clearForm();
  }, [feedBackList]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackData = {
      id: new Date().toISOString(),
      title: title,
      FeedBack: feedback,
      Rating: rating,
    };
    dispatch({
      type: "ADD_FEEDBACK",
      payload: feedbackData,
    });
    clearForm();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div>
          <label id="title">
            Title:{" "}
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <textarea
            className="feedback-text"
            placeholder="Tell about us"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <div className="rating">
          <label>
            Feed back rating :{" "}
            {[1, 2, 3, 4, 5].map((star) => {
              return (
                <span key={star}
                  className="star-rating"
                  style={{
                    cursor: "pointer",
                    color: rating >= star ? "gold" : "gray",
                    fontSize: `35px`,
                  }}
                  onClick={() => {
                    setRating(star);
                  }}
                >
                  {" "}
                  ★{" "}
                </span>
              );
            })}
          </label>
        </div>
        <div>
          <button className="submit-btn" type="submit">
            Submit Feedback
          </button>
        </div>
      </form>
      {feedBackList.length > 0 && (
        <FeedBackList
          feedBackList={feedBackList}
          dispatch={dispatch}
        ></FeedBackList>
      )}
    </div>
  );
}
