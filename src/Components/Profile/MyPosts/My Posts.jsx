import React from "react";
import Post from "./Post/Post";

const MyPost = (props) => {
    return(
        <div>
            New Post
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button>Добавить пост</button>
                </div>
                
                
            </div>
            

            <div>
                
                <Post post={'Hello!'} like={'5'} />
                
                <Post post={'How are you?'} like={'7'}/>
            </div>
            
        </div>
    )
}

export default MyPost;