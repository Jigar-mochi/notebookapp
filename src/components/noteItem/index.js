import React, { useContext } from 'react'
import Notecontext from '../../context/notes/Notecontext'

function Noteitem({ updatenote, note }) {
    const context = useContext(Notecontext)
    const { deletenote } = context

    const delt = (id) => {
        deletenote(id)
        console.log(id)
    }

    return (
        <div className="container">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i onClick={() => { updatenote(note) }} className="fa-solid fa-pen-to-square"></i>
                    <i onClick={() => { delt(note._id) }} className="fa-solid fa-trash-can mx-3"></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem