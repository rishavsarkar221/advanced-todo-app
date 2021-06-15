import React, { useState } from 'react'
import PinnedNote from './PinnedNote'
import SearchPinnedNotes from './SearchPinnedNotes';

const AllPinnedNotes = (props) => {
    const [filteredValue, setFilteredValue] = useState("");

    const [filteredNotes, setFilteredNotes] = useState(props.pinnedLists)

    const filterNotesHandler = (value) => {
        setFilteredValue(value);
        
        setFilteredNotes(props.pinnedLists.filter(value => value.toUpperCase().includes(filteredValue.toUpperCase())))
    }

    return (
        <div>
            <br/>
            <SearchPinnedNotes filterNotes={filterNotesHandler} />

            {props.pinnedLists.length === 0 && <h1>No Pinned Notes as of now</h1>}
            
            {filteredNotes.map((value, id) => {
                return <PinnedNote key={id} value={value} id={id} unpinNote={props.unpinNoteHandler} />
            })}
        </div>
    )
}

export default AllPinnedNotes