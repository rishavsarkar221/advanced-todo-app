import React, { useState } from 'react'

const SearchPinnedNotes = (props) => {
    const [value, setValue] = useState("");

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        props.filterNotes(value);
    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler} placeholder="Search Pinned Lists" />
        </div>
    )
}

export default SearchPinnedNotes