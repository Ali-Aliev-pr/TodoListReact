import './App.css';
import React from "react";
import {useState} from 'react';
import Item from "./TodoItem";

function App() {

    let click = React.createRef()

    let [comments, setComments] = useState([]);

    const press = () => {
        // console.log(click.current.value)
        let comment = click.current.value
        setComments([...comments, {id: comments.length, value: comment}])
        click.current.value = '';
    }

    function del(id) {
        console.log(id)
        console.log(comments.map(item => item))
        setComments(comments.filter(item => item.id !== id))
    }


    return(
        <>
            <div className="container">
                <div className="block">
                    <div className="topContainer">
                        <input type='text' ref={click}/>
                        <button onClick={()=>press()}>Press</button>
                    </div>
                    <div className="listFather">
                        <ul className="list">
                            {comments.map((item) => {
                                return (
                                    <div>
                                        <Item
                                            value={item.value}
                                            pop={item.id}
                                            del={ () => del(item.id) }
                                        />
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;