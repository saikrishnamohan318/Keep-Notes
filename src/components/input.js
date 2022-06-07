import React, { useState } from "react";
function Input(props) {
    var [note,setNote] = useState({
        title: '',
        content: ''
    })
    var handleChange = (event) => {
        var { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });    
    }
    var addContent = (event) => {
        event.preventDefault();
        props.get(note);
        setNote({title:'',content:''})
    }
        return(
            <div className="input">
                <form>
                    <input onChange={handleChange} value={note.title} className="inputTitle" name="title" placeholder="Title" style={{marginTop:"10px",marginBottom:"10px"}}/>
                    <input onChange={handleChange} value={note.content} className="inputContent" name="content" placeholder="Content" style={{marginTop:"10px",marginBottom:"10px"}}/>
                    <button onClick={addContent} className="button">Add</button>
                </form>
            </div>
        )
}
export default Input;