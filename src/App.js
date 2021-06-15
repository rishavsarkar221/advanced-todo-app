import React, { useState } from 'react'
import AllList from './AllList';
import AllPinnedNotes from './AllPinnedNotes';
import { Switch, Route, NavLink } from 'react-router-dom';

const App = () => {
	const [lists, setLists] = useState([]);
	const [pinnedLists, setPinnedLists] = useState([]);

	const submitHandler = (value) => {
		setLists(oldLists => [value, ...oldLists]);
	} 

	const deleteNoteHandler = (id) => {
		setLists(oldLists => oldLists.filter((value, index) => id !== index));
	}

	const pinNoteHandler = (value, id) => {
		setPinnedLists(oldPinnedLists => [value, ...oldPinnedLists]);
		setLists(oldLists => oldLists.filter((value, index) =>  id !== index));
	}

	const unpinNoteHandler = (id) => {
		setPinnedLists(oldPinnedLists => oldPinnedLists.filter((value, index) => id !== index));
		setLists(oldLists => [pinnedLists[id], ...oldLists]);
	}

	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<br/>
			<NavLink to="/pinned">Pinned</NavLink>
			<br/><br/>
			<Switch>
				<Route exact path="/" component={() => <AllList lists={lists} deleteNote={deleteNoteHandler} submitHandler={submitHandler} pinNote={pinNoteHandler} />} />
				<Route exact path="/pinned" component={() => <AllPinnedNotes pinnedLists={pinnedLists} unpinNoteHandler={unpinNoteHandler} />} />
			</Switch>
		</div>
	)
}

export default App