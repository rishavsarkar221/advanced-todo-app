import React from 'react'

const List = (props) => {
    const onDeleteNoteHandler = () => {
        props.deleteNote(props.id)
    }

    const onPinNoteHandler = () => {
        props.pinNote(props.list, props.id);
    }

    return (
        <div>
            <h1>{props.list}</h1>
            <button onClick={onDeleteNoteHandler}>Delete</button> 
            <button onClick={onPinNoteHandler}>Pin</button> 
        </div>
    )
}

export default List