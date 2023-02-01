import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return(
        <div  className={style.post}>
            <div>
                <img src={'https://get.pxhere.com/photo/avatar-people-person-business-user-man-character-set-icon-portrait-profile-pictograph-hairstyle-jacket-suit-sunglasses-handsome-head-face-design-concept-symbol-smile-formal-elements-eyewear-vision-care-gentleman-male-shoulder-outerwear-necktie-businessperson-facial-hair-glasses-clip-art-human-behavior-white-collar-worker-neck-1447673.jpg'}></img>  
            </div>
            <div>
                {props.post} 
            </div>
            <div>
                Like: {props.like}
            </div>
            
           
        </div>
    )
}

export default Post;