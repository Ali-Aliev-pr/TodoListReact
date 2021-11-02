import React from "react";

function Item({value, pop, del}) {
    return(
        <>
            <div className="item">
                <li>{value}</li>
                <button onClick={()=>del()}>DEl</button>
            </div>
        </>
    )
}

export default Item;