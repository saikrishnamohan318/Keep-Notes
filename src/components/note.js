import React from "react";
function Note(props){
    function removeItem(){
        props.del(props.id);
    }
    return(
        <div className="note">
            <h1 className="title">{props.title}</h1>
            <p className="content">{props.content}</p>
            <button className="delete" onClick={removeItem}>Delete</button>
        </div>
    )
}
export default Note;