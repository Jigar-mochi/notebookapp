import React from 'react'
import Notecontext from '../context/notes/Notecontext'
import { useContext, useEffect } from 'react'

function About() {
    const a = useContext(Notecontext)
    useEffect(() => {
        a.update()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            This is about and {a.state.name} is {a.state.age} years old
        </div>
    )
}

export default About