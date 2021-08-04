import Skeleton from 'react-loading-skeleton';
const TextSkeleton = ({width, text}) => {
    return(
        <Skeleton 
            width={width}
            height={text ? 20 : 50}
        />
    )
}
export default TextSkeleton