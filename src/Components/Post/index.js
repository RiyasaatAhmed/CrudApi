import { Grid, Box } from "@material-ui/core"
import { Text } from "../Resuable"
import { useStyles } from "./style"
import { Link } from "react-router-dom"
import ImageSkeleton from "../Skeleton/image"
import { useState } from "react"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useDispatch } from "react-redux"
import { deletePost } from "../../Redux/slices/postSlice"
const Post = (props) => {
    const { body, title, id } = props
    const [imageLoaded, setImageLoaded] = useState(false)
    const classes = useStyles(props)
    const dispatch = useDispatch()



    return(

        <Grid 
            item 
            xs={12} sm={6} md={4} lg={3}
            className={classes.postContainer}
        >
            {!imageLoaded && <ImageSkeleton width={200} height={200} />}
            <img src={`https://picsum.photos/200/200?random=${id}`} 
                alt={id} 
                style={imageLoaded ? {} : {display: 'none'}}
                onLoad={() => setImageLoaded(true)}
            />
            <Text
                variant='h3'
                className={classes.title}
            >
                {title.slice(0,20)}{title.length >= 16 && "... " }
            </Text>
            <Text
                variant='body1'
                className={classes.body}
            >
                {body.slice(0,100)}{body.length >= 100 && "... " }
            </Text>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >

                <Link
                    className={classes.link}
                    to={`/posts/${id}`}
                >
                    <Text
                        variant='body1'
                        className={classes.readMore}
                    >
                        {'Read More'}
                    </Text>
                </Link>
                <DeleteOutlineIcon 
                    style={{cursor: 'pointer'}} 
                    onClick={() => dispatch(deletePost({id}))}          
                />
            </Box>
        </Grid>
    )
}
export default Post