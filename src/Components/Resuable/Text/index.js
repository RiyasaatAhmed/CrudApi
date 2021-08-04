import React from 'react'
import { Typography } from '@material-ui/core'

const Text = ({children,className,...rest}) => {
    return (
        <Typography 
            {...rest} 
            className={className}
        >
            {children}
        </Typography>
    )
}
export default Text