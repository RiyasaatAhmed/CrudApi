import Skeleton from 'react-loading-skeleton';

const ImageSkeleton = ({width, height}) => {
    return (
        <Skeleton 
            width={width}
            height={height}
        />
    )
}
export default ImageSkeleton