import React from "react"

const UerInfo = ({name,email}) => {
    return <>
    {name && <p style={{color:'green'}}>{name}-{email}</p>}
    </>
}
export default UerInfo