import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Text, Modal } from "../../Components/Resuable"
import useGetPostById from "../../Helpers/CustomHooks/useGetPostById"
import ImageSkeleton from "../../Components/Skeleton/image"
import TextSkeleton from "../../Components/Skeleton/text"
import EditIcon from '@material-ui/icons/Edit'
import { useStyles } from "./style"
import { Box } from "@material-ui/core"
import { editPostById } from "../../Helpers/HTTPCalls/httpCalls"
import { useDispatch } from "react-redux"
import { updatePost } from "../../Redux/slices/postSlice"



const PostDescriptionPage = () => {

    const dispatch = useDispatch()

    const {id} = useParams()
    const post  =  useGetPostById(id)

    const classes = useStyles()
    const [loaded, setLoaded] = useState(false)
    const [editable, setEditable] = useState(false)

    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const update = async() => {
        const res = id <= 100 ? await editPostById({userId, title, body, id}) : {userId, title, body, id}
        dispatch(updatePost({id: id, data: res}))
        setEditable(false)
    }

    useEffect(() => {
        setUserId(post?.userId)
        setTitle(post?.title)
        setBody(post?.body)
        // eslint-disable-next-line
    }, [post])



    return (
        <div className={classes.postContainer}>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
            >
                <div className={classes.iconDiv}>
                    <Box
                        className={classes.iconContainer}
                    >
                        <EditIcon  
                            className={classes.icon}
                            onClick={() => setEditable(true) } 
                        />
                    </Box>
                </div>
                <Box 
                    pb={'1rem'}
                >
                    {!loaded && <ImageSkeleton width={'80vw'} height={300} />}
                    <img 
                        src={`https://picsum.photos/600/300?random=${id}`} 
                        alt={id} 
                        style={loaded ? {} : {display: 'none'}}
                        className={classes.image}
                        onLoad={() => setLoaded(true)}
                    />
                </Box>
            </Box>

            <Box
                pb={'1rem'}
            >
                {title ? (
                    <Text
                        className={classes.title}
                    >
                        {title}
                    </Text>

                ) : (
                    <TextSkeleton width={'60vw'} />            
                )}
            </Box>

            <Box
                pb={'1rem'}
            >
                {body ? (
                    <Text
                        variant='body1'
                        className={classes.body}
                    >
                        {body}
                    </Text>

                ) : (
                    <>
                        <TextSkeleton width={'60vw'} text={true} />            
                        <TextSkeleton width={'60vw'} text={true}/>  
                        <TextSkeleton width={'60vw'} text={true}/>  
                    </>          
                )}

            </Box>

            <Modal 
                headingTitle='Edit Post'
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

            {/* {
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
                            {'Edit Post'}
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
                                onClick={update}
                            >  
                                {'Post'}
                            </CustomButton>
                        </Box>
                    </div>
                </>
            } */}
        </div>
    )
}
export default PostDescriptionPage