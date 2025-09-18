import React from 'react'
const customBtn = {
    backgroundColor: "grey",
    border: 'none',
    color: '#fff',
    fontSize: '19px',
    padding: '15px 30px',
    textAlign: 'center',
    textionDecoration : 'none',
    borderRadius: '7px',
    display: 'block',
    margin: '5px auto'
}

const CustomBtn = (props) => {

    let customStyleBtn = props.myCustomBtn

  return (
    <div>
      <button style= {{...customBtn, ...customStyleBtn }}>{props.children}</button>
    </div>
  )
}

export default CustomBtn
