

import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    postContainer: {
        backgroundColor: '#55efc4',
        backgroundImage: 'linear-gradient(315deg, #55efc4 0%, #000000 65%)',
        minHeight: '87.7vh'
    },
    title: {
        color: 'white',
        margin: 'auto',
        fontSize: '1.5rem',
        [theme.breakpoints.down('sm')]:{
            width: '90vw',
            fontSize: '1rem',
        }
    },
    iconDiv: {
        width: 600,
        margin: 'auto',
        paddingTop:'1rem',
        paddingBottom: '1rem',
        [theme.breakpoints.down('sm')]:{
            width: '80vw',
        }
    },
    iconContainer: {
        width: '100%',
        color:'white',
    },
    icon: {
        float: 'right',
        cursor: 'pointer'
    },
    body: {
        fontSize: 14,
        maxWidth: 600,
        margin: 'auto',
        color: 'white',
        paddingBottom: 8,
        textAlign: 'justify',
        [theme.breakpoints.down('sm')]:{
            width: '95vw',
            fontSize: 10,
        }
    },
    readMore: {
        color: 'blue',
        display: 'block',
        fontSize: 14,
        textAlign: 'left'
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            width: '80vw',
            height: 300
        }
    },
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
        height: '70vh',
        background: 'white',
        // [theme.breakpoints.down('md')]:{
        //     top: '30vh',
        //     width: '90vw',
        //     height: '40vh',
        // },
        // [theme.breakpoints.down('sm')]:{
        //     top: '25vh',
        //     width: '90vw',
        //     height: '50vh',
        // },
        // [theme.breakpoints.down('xs')]:{
        //     top: '15vh',
        //     width: '90vw',
        //     height: '70vh',
        // }
    },
    closeIcon:{
        float: "right",
        paddingRight: 8,
        paddingTop: 8,
        cursor: 'pointer'
    },
    gridItems : {
        margin: 'auto'
    },
    menualErrorFix:{
        marginTop: -8,
        fontSize: 11,
        marginLeft: '-22%',
        color: 'red',
        height: 8,
    },
    editTitle:{
        marginTop: '4rem',
        fontSize: '2rem',
        marginBottom: '1rem',
        [theme.breakpoints.down('xs')]:{
            marginTop: '6rem',
        }
    },
    btn: {
        marginTop: '1rem'
    }
}));