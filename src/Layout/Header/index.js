import './style.css'
import { Text } from '../../Components/Resuable'
import { Box } from '@material-ui/core'
import useGetPosts from './../../Helpers/CustomHooks/useGetPosts'
import { useHistory } from 'react-router'



const Header = () => {
    useGetPosts()
    const history = useHistory()
    return (
        <Box className='Container'>
            <Text
                variant='h3'
                align='left'
                onClick = {() => history.push('/')}
                style={{cursor: 'pointer'}}
            >
                {"Post API"}
            </Text>
        </Box>
    )
}


export default Header