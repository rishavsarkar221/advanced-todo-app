import React, { useState } from 'react'

const Form = (props) => {
    const [text, setText] = useState("");

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        props.submit(text);
        
        setText("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChangeHandler} value={text} placeholder="Add a Task" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form