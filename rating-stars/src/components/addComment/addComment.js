import React from 'react';
import ReactStars from "react-rating-stars-component";

function AddComment({ stateValue, voteHandler, commentHandler, handleAddComment }) {
    function handleClick() {
        if (stateValue.commentValue === "") {
            alert("Lütfen yorum satırını boş bırakmayınız.")
        } else if (stateValue.commentValue.length < 3) {
            alert("Lütfen yorum yaparken üç karakterden fazla kullanınız.")
        }
        if (stateValue.vote === 0) {
            alert("Lütfen puan veriniz (1'den 5'e kadar)")
        }
        if (stateValue.commentValue !== "" && stateValue.vote !== 0) {
            handleAddComment();
        }

    }

    return (
        <div>
            <h3>Yorum Ekle</h3>
            <input value={stateValue.commentValue} onChange={(e) => commentHandler(e)}/>
            
            <ReactStars
                defaultRating={0}
                onChange={(e) => voteHandler(e)}
                count={5}
                size={24}
                activeColor="#ffd700"
            />
            
            <button onClick={handleClick}>Yorum Yap</button>
        </div>
    )
};

export default AddComment;