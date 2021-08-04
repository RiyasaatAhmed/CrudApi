import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    modalOverlay: {
        position: 'absolute',
        zIndex: 100,
        width: '100vw',
        height: '100vh',
        inset: 0,
        opacity: 0.75,
        background: 'black',
    },
    modalContainer: {
        position: 'absolute',
        zIndex: 101,
        top: '15vh',
        left: '50%',
        transform: 'translate(-50%, 0)',
        width: '70vw',
        // height: '70vh',
        background: 'white',
        [theme.breakpoints.down('md')]:{
            top: '30vh',
            width: '90vw',
            // height: '40vh',
        },
        [theme.breakpoints.down('sm')]:{
            top: '25vh',
            width: '90vw',
            // height: '50vh',
        },
        [theme.breakpoints.down('xs')]:{
            width: '90vw',
            // height: '70vh',
        }
    },
    closeIcon:{
        float: "right",
        paddingRight: '1rem',
        paddingTop: '1rem',
        cursor: 'pointer',
        color: 'black'
    },
    gridItems : {
        margin: 'auto'
    },
    editTitle:{
        marginTop: '4rem',
        fontSize: '2rem',
        marginBottom: '1rem',
        color: 'black',
        [theme.breakpoints.down('xs')]:{
            marginTop: '2rem',
        }
    },
    btn: {
        marginTop: '1rem',
        marginBottom: '2rem'
    }
}));