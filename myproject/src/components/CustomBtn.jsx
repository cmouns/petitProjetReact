import React from 'react'
const customBtn = {
    backgroundColor: "grey",
    border: 'none',
    color: '#fff',
    fontSize: '19px',
    padding: '15px 30px',
    textAlign: 'center',
    textDecoration : 'none',
    borderRadius: '7px',
    display: 'block',
    margin: '5px auto'
}

const CustomBtn = (props) => {
    const { children, myCustomBtn, ...leReste } = props;


    let customStyleBtn = myCustomBtn

  return (
    
      <button type = "button" style= {{...customBtn, ...customStyleBtn }} {... leReste}>{children}</button>
    
  )
}

export default CustomBtn
