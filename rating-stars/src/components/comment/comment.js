import React from 'react';
import ReactStars from "react-rating-stars-component";

function Comment({comments}) {
    return (
        <div>
            <h1>Yorumlar</h1>

            {comments.length === 0 && <h4>Henüz hiç yorum yok.</h4>}

            {comments.length !== 0 && comments.map((item, index) => (
                <div key={index}>
                    <div>{item.text}</div>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={item.vote}
                        edit={false}
                    />
                </div>
            ))}
        </div>
    )
};

export default Comment;