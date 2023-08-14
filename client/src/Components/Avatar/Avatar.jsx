import React from "react"

const Avatar = ({ children, backgroundColor, px,py, borderRadius, color,fontSize,cursor,textDecoration}) => {
    const style = {
        backgroundColor,
        padding:`${py} ${px}`,
        borderRadius,
        color : color || 'black',
         fontSize,
        textAlign:'center',
        cursor : cursor || null,
        textDecoration:"none"
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Avatar;