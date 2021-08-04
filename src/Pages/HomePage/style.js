import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({

    container: {
        position: 'absolute',
        inset: 0,
        zIndex: -5,
        height: '100vh',
        width: '100vw',
        backgroundColor: '#222222',
        backgroundImage: 'linear-gradient(315deg, #222222 0%, #000 70%)',
        color: 'white',
    },
    link: {
        listStyle: 'none', 
        textDecoration: 'none', 
        color: 'white'
    },
    createPost: {
        marginLeft: '1rem'
    }
}));