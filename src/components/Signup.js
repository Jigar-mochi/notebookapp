import React from 'react'
import Notecontext from '../context/notes/Notecontext'
import { useContext } from 'react'

function Signup() {
    const context = useContext(Notecontext)
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const { addnote } = context

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleclick = (e) => {
        e.preventDefault()
        addnote(note)
        setNote({ title: "", description: "", tag: "" })
    }
    return (
        <div className='container col-md-3 my-5'>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" onChange={onchange} className="form-control" id="name" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={onchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={onchange} className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} onClick={handleclick} type="submit" className="btn btn-primary">signup</button>
            </form>
        </div>
    )
}

export default Signup