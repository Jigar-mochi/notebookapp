import React from "react";
import Notecontext from "./Notecontext";
import { useState } from "react";



const Notestate = (props) => {
    const host = "http://localhost:800"
    const data = []
    const [state, setState] = useState(data)


    // Get all Notes
    const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        // console.log(json)
        setState(json)
    }


    // Add a Note
    const addnote = async ({ title, description, tag }) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json()
        setState(state.concat(json))

    }

    // delete note
    const deletenote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = response.json();
        setState(json)
        const newnote = state.filter((e) => { return e._id !== id })
        console.log(newnote)
        setState(newnote)
        console.log(id)
    }


    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        setState(json)

        let newnotes = JSON.parse(JSON.stringify(state))

        // Logic to edit in client
        for (let index = 0; index < newnotes.length; index++) {
            const element = newnotes[index];
            if (element._id === id) {
                newnotes[index].title = title;
                newnotes[index].description = description;
                newnotes[index].tag = tag;
                break;
            }

        }
        setState(newnotes)
    }


    return (
        <Notecontext.Provider value={{ state, addnote, deletenote, editNote, getNotes }}>
            {props.children}
        </Notecontext.Provider >
    )

}
export default Notestate;