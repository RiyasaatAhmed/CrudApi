import { Box } from '@material-ui/core'
import { CustomButton, Modal } from '../../Components/Resuable'
import { useStyles } from './style'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { createPost } from '../../Helpers/HTTPCalls/httpCalls'
import { useDispatch } from "react-redux"
import { addPost } from '../../Redux/slices/postSlice'

const HomePage = () => {

    const dispatch = useDispatch()
    const classes = useStyles()


    const [editable, setEditable] = useState(false)

    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const update = async() => {
        const res = await createPost({userId, title, body})
        dispatch(addPost({data: res}))
        setEditable(false)
    }

    return(
        <Box
            className={classes.container}
        >
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                width='100vw'
                height='100vh'
            >
                <Link
                    className={classes.link}
                    to='/posts'
                >
                    <CustomButton 
                        variant="outlined"
                        textcolor= 'white'
                        background='#222222'
                        bordercolor='black'
                    >  
                        {'Get Posts'}
                    </CustomButton>
                </Link>

                <CustomButton 
                        variant="outlined"
                        textcolor= 'white'
                        background='#222222'
                        bordercolor='black'
                        className={classes.createPost}
                        onClick={() => setEditable(true)}
                    >  
                        {'Create Post'}
                </CustomButton>
            </Box>

            <Modal 
                headingTitle='Create Post'
                editable={editable}
                setEditable={setEditable}
                userId={userId}
                setUserId={setUserId}
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                post={update}
            />
        </Box>
    )
}
export default HomePage