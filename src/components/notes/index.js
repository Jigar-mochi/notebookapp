import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Notecontext from '../../context/notes/Notecontext'
import Noteitem from '../noteItem'
import Addnote from '../../pages/addNote'

function Notes() {
    const navigate = useNavigate();
    const context = useContext(Notecontext)
    const { state, getNotes, editNote } = context
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const ref = useRef(null)
    const refclose = useRef(null)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    const updatenote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const editnote = (e) => {
        e.preventDefault()
        console.log("updating the note", note)
        editNote(note.id, note.etitle, note.edescription, note.tag)
        refclose.current.click()
    }

    return (
        <div className="container">
            <Addnote />
            <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editnote</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" onChange={onchange} className="form-control" value={note.etitle} name='etitle' id="etitle" aria-describedby="emailHelp" minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" onChange={onchange} className="form-control" value={note.edescription} name='edescription' id="edescription" minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input className="form-control" onChange={onchange} type="text" id='etag' value={note.etag} name='etag' aria-label="default input example" minLength={5} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" onClick={editnote} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-3'>
                <div className="row">
                    {
                        state.map((e) => {
                            return <div className="col-md-3" key={e._id}>
                                <Noteitem key={e._id} updatenote={updatenote} note={e} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Notes