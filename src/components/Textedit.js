import React, { useState } from 'react'


export default function Textedit(props) {
    const [text, setText] = useState("")

    const handleup = () => {
        console.log("you have clicked button");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to upper case", "success")
    }
    const handlelow = () => {
        console.log("you have clicked button");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lower case", "success")
    }

    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;

        });
        setText(newText.join(" "));
        props.showalert("Converted to Title case", "success")
    }
    const copyText = () => {
        let text = document.getElementById("mytextbox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showalert("text copied", "success")
    }
    const clear = () => {
        setText("");
        props.showalert("all cleared", "success")

    }
    const spacehandle = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("spaces are handled", "success")
    }
    const handelonchange = (event) => {
        console.log("text started to change");
        setText(event.target.value);
        console.log(text)
    }
    return (
        <>
            <div className="container text-dark my-5">
                <div>
                    <h1 className="my-3">{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handelonchange} placeholder="Leave a comment here" id="mytextbox" rows="8"></textarea>
                    </div>
                    <button type="button" onClick={handleup} className="btn my-2 mx-2 btn-warning">convert to uppercase</button>
                    <button type="button" onClick={handlelow} className="btn my-2 mx-2 btn-warning">convert to lowercase</button>
                    <button type="button" onClick={intoTitleCase} className="btn my-2 mx-2 btn-warning">Title case</button>
                    <button type="button" onClick={clear} className="btn my-2 mx-2 btn-warning">clear</button>
                    <button type="button" onClick={copyText} className="btn my-2 mx-2 btn-warning">copyText</button>
                    <button type="button" onClick={spacehandle} className="btn my-2 mx-2 btn-warning">spacehandle</button>

                </div>
                <div className="container">
                    <h2>your text summary</h2>
                    <p>{text.split(' ').filter((element) => { return element.length !== 0 }).length} words and {text.length} charactors.</p>
                </div>
                <div className="container">
                    <h2>time taken for reading this</h2>
                    <p>{0.25 * text.split(' ').filter((element) => { return element.length !== 0 }).length} seconds or {0.0042 * text.split(' ').filter((element) => { return element.length !== 0 }).length} minutes</p>
                </div>
                <div className="container">
                    <h2>Privew</h2>
                    <p>{text}</p>
                </div>
            </div>

        </>
    )
}
