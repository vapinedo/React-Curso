import React from 'react'
import ProTypes from 'prop-types';

const Result = ({ value }) => (
    <div className="result">
        { value }
    </div>
)

Result.propTypes = {
    value: ProTypes.string.isRequired
}
Result.defaultProps = { 
    value: "0"
}

export default Result