import React from 'react'

const PinnedNote = (props) => {
    const unpinNoteHandler = () => {
        props.unpinNote(props.id);
    }

    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={unpinNoteHandler}>Unpin</button>
        </div>
    )
}

export default PinnedNote