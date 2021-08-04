import React from "react";
import Button from "@material-ui/core/Button";

function CustomButton({ children, textcolor, background, bordercolor, className, ...rest }) {

  return (
    <>
        <Button 
            {...rest} 
            style=
                    {{ 
                      color: textcolor ? textcolor : 'black',
                      backgroundColor: background ? background : 'transparent',
                      border:`1px solid ${bordercolor}`
                    }}
            className={className}
        >
            {children}
        </Button>
    </>
  );
}

export default CustomButton;