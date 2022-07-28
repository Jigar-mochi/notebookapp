import React from 'react'
import Notecontext from '../context/notes/Notecontext'
import { useContext } from 'react'
import { useState } from 'react'


function Addnote() {
    const context = useContext(Notecontext)
    const { addnote } = context
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleclick = (e) => {
        e.preventDefault()
        addnote(note)
        setNote({ title: "", description: "", tag: "" })
    }
    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='container my-4'>
                <h3>Welcome to notebook add your note here</h3>
                <form >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" onChange={onchange} className="form-control" value={note.title} name='title' id="title" aria-describedby="emailHelp" minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" onChange={onchange} className="form-control" value={note.description} name='description' id="description" minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input className="form-control" onChange={onchange} type="text" value={note.tag} id='tag' name='tag' aria-label="default input example" minLength={5} required />
                    </div>
                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" onClick={handleclick} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Addnote