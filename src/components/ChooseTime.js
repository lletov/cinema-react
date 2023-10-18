import React from 'react'

export default function ChooseTime({sessions}) {
    if (sessions === null) {
        return (
            <div className='choose-time'>
            <h3>Choose time: </h3> 
            <p style={{marginLeft: '10px', color: 'var(--grey-text)'}}>choose movie first</p>
        </div>
            )
    } else {
        const sessionsList = sessions.map(s => <button className='choose-time-btn'>{s}</button>)
        return (
            <div className='choose-time'>
                <h3>Choose time:</h3> 
                <div>{sessionsList}</div>
            </div>
        )
    }
    
}
