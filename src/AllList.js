import React, { useState } from 'react';
import List from './List';
import Form from './Form';
import SearchNotes from './SearchNotes';

const AllList = (props) => {
    const [filteredValue, setFilteredValue] = useState("");
    const [filteredList, setFilteredList] = useState(props.lists);

    const filterNotesHandler = (value) => {
        setFilteredValue(value);
        setFilteredList(props.lists.filter(value => value.toUpperCase().includes(filteredValue.toUpperCase())))
    }

    return (
        <div>
            <Form submit={props.submitHandler} />

            <br />

            <SearchNotes filterNotes={filterNotesHandler} />

            {props.lists.length === 0 && <h1>No Lists to Display</h1>}
            
            {filteredList.map((list, id) => {
                return <List key={id} id={id} deleteNote={props.deleteNote} list={list} pinNote={props.pinNote} />
            })}
        </div>
    )
}

export default AllList