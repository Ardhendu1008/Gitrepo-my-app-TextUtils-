import React from 'react'
import PropTypes from 'prop-types'


export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div>
      <div className="alert alert-info" role="alert">
       <strong>{props.alert.msg}</strong>
    </div>
    </div>}
    </div>
  )
}
