import React from 'react'
import ProTypes from 'prop-types';

const Result = ({ value }) => {
    console.log("Renderización de Result", value)
    return (
        <div className="result">
            { value }
        </div>
    )
}

Result.propTypes = {
    value: ProTypes.string.isRequired
}

export default Result