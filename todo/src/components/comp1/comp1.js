import './App.css';
import React from "react";
import {useState} from 'react';


function Comp1() {

    const [count, setCount] = useState(0);

    const [comment, setComent] = useState([]);

    let myRef = React.createRef();

    let plus = () => {
        let setCounter = count;
        setCounter++
        setCount(setCounter)
    }

    let addComment = () => {
        let commentValue = myRef.current.value;
        let comments = [...comment, commentValue];
        setComent(comments);
        myRef.current.value = '';
    }

    return (
        <>
            <div className="father">
                <button onClick={plus}>Nazchmi!</button>
                <p>{count}</p>
                <p>{count % 2 === 0 ? 'even' : 'odd'}</p>
                <hr/>
                <textarea ref={myRef}></textarea>
                <button onClick={addComment}>Click!</button>
                <ul className='list'>
                    {comment.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })}
                </ul>
            </div>
        </>
    );
}

export default Comp1;