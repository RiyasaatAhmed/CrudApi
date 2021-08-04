import { Box, Grid } from "@material-ui/core"
import useGetPosts from "../../Helpers/CustomHooks/useGetPosts"
import { useStyles } from "./style"
import {Text} from './../../Components/Resuable'
import Post from './../../Components/Post'
const PostsPage = () => {
    const {posts} = useGetPosts()
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            {
                typeof(posts) === "string" ? 
                (
                    <Text 
                        variant='h5'
                    > {`Opps, ${posts}! Couldn't fetch the data.`} </Text>
                ) 
                : 
                (
                    <Grid container justifyContent='center'>
                        {posts && posts.length > 0 && posts?.map(({id, body, title}) => (
                            <Post
                                key={id}
                                id={id}
                                body={body}
                                title={title}
                            />
                        ))}
                    </Grid>
                )
            }
        </Box>
    )
}
export default PostsPage