import React from 'react'

const Conditional = () => {
    const value = false 
    return (
        <div>
            {value ? <div>Result true</div> : <div>Result false</div>}
        </div>
    )
}

export default Conditional
