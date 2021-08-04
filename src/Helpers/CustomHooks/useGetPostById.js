import { useSelector } from "react-redux"
import { postSelector } from "../../Redux/slices/postSlice"
const useGetPostById = (id) => {
    const {posts} = useSelector(postSelector)
    return posts && posts.find( post => post.id.toString() === id) 
}
export default useGetPostById