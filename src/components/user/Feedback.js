import "../../assets/styles/Feedback.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(0);
    const [emojiRating, setEmojiRating] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here
        console.log({ name, email, feedback, rating, emojiRating });
        navigate('/'); // Redirect to home page after submission
    };

    return (
        <div className="background-image-container">
            <div className="feedback-container">
                <div className="feedback-box">
                    <h1>Rate Your Experience</h1>
                    <p>How happy are you with our product?</p>
                    <div className="rating-stars">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={rating > index ? "star filled" : "star"}
                                onClick={() => setRating(index + 1)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Add your feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                        />
                        <div className="emoji-rating">
                            <div className="emojis">
                                {["😃", "🙂", "😐", "😞", "😡"].map((emoji, index) => (
                                    <span
                                        key={index}
                                        className={
                                            emojiRating === index
                                                ? "emoji selected"
                                                : "emoji"
                                        }
                                        onClick={() => setEmojiRating(index)}
                                    >
                                        {emoji}
                                    </span>
                                ))}
                            </div>
                            <div className="emoji-labels">
                                <span>Excellent</span>
                                <span>Good</span>
                                <span>Average</span>
                                <span>Poor</span>
                                <span>Very Poor</span>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
