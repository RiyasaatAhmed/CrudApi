import CloseIcon from '@material-ui/icons/Close'
import { Text, CustomButton, Input } from '..'
import { Box, Grid } from "@material-ui/core"
import { useStyles } from "./style"

const Modal = (props) => {

    const classes = useStyles()
    const {headingTitle, editable, setEditable, userId, setUserId, title, setTitle, body, setBody, post} = props

    return (
        <>
        {
            editable 
            && 
            <>
                <div className={classes.modalOverlay}></div>
                <div className={classes.modalContainer} > 
                    <CloseIcon 
                        className={classes.closeIcon}
                        onClick={() => setEditable(false)}
                    />
                    <Text className={classes.editTitle}>
                        {headingTitle ? headingTitle : 'Modal Title'}
                    </Text>
                    <Box p={1} >
                        <Grid item xs={10} className={classes.gridItems} >
                            <Input 
                                required
                                label='UserId' 
                                value={userId} 
                                onChange={(e) => setUserId(e.target.value)} 
                            />
                        </Grid>
                        <Grid item xs={10} className={classes.gridItems} >
                            <Input 
                                required
                                label='Title' 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                            />
                        </Grid>
                        <Grid item xs={10} className={classes.gridItems} >                            
                            <Input
                                required
                                label="Post Body"
                                multiline
                                minRows={5}
                                maxRows={15}
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            />
                        </Grid>
                        <CustomButton 
                            variant="outlined"
                            textcolor= 'white'
                            background='#222222'
                            bordercolor='black'
                            className={classes.btn}
                            onClick={post}
                        >  
                            {'Post'}
                        </CustomButton>
                    </Box>
                </div>
            </>
            }
        </>
    ) 
}
export default Modal