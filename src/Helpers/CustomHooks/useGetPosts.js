import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, postSelector } from "../../Redux/slices/postSlice"

const useGetPosts = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(postSelector)

    useEffect(() => {
        if(posts.length === 0){
            dispatch(fetchPosts())
        }
        // eslint-disable-next-line
    }, [])
    return {posts}
}
export default useGetPosts