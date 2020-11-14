import React from 'react'

const Buttons = ({ Jobs, setValue, Value }) => {
    // Return
    return (
        <div className="btn-container">
            {Jobs.map((btn, index) =>
                <button
                    key={index}
                    className={`buttn  ${index === Value && 'buttn-active'} `}
                    onClick={() => setValue(index)}
                >
                    {btn.company}
                </button>)}
        </div>
    )
}


export default Buttons;