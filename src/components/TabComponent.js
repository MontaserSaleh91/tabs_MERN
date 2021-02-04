import React from 'react'
import {useState} from 'react';

const TabComponent = (props) => {
    const[state,setState]= useState("");
    const handleTab= (e, value)=>{
        e.preventDefault();
        setState(value);
    }
    return (<>{

        props.tabs.map( item=> {

            return <button onClick={(e)=>handleTab(e,item.content)}>{item.label}</button>
        })
    }
    <p> {state}</p>
        </>

    )
}
export default TabComponent;