import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    postContainer: {
        border: `1px solid white`,
        maxWidth: 300,
        margin: '1rem',
        padding: '1rem',
        transition: 'all ease-out',
        transitionDuration: '0.5s',
        "&:hover":{
            backgroundColor: '#091914',
        }
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        maxWidth: 200,
        margin: 'auto',
        paddingBottom: 8
    },
    link: {
        listStyle: 'none', 
        textDecoration: 'none', 
        color: 'white'
    },
    body: {
        fontSize: 14,
        minWidth: 200,
        margin: 'auto',
        color: 'grey',
        textAlign: 'justify',
        paddingBottom: 8
    },
    readMore: {
        color: 'blue',
        display: 'block',
        fontSize: 14,
        textAlign: 'left',
        cursor: 'pointer'
    }
}));