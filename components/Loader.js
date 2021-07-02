import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import infinity from '../public/infinity.svg'

const styles = theme => ({
    loaderWrap: {
        width: '100%',
        height: 'calc(100vh - 70px)',
        display: 'flex',
        marginTop: '70px',
        background: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    img: {
        width: '150px',
        height: '150px'
    },
    message: {
        fontFamily: 'Lato',
        margin: '0',
        fontSize: '1.1rem',
        marginTop: '-20px'
    }
})

const useStyles = makeStyles(styles)

export default function Loader({ message }) {
    const classes = useStyles()
    return (
        <div className={classes.loaderWrap} >
            <img alt='loading' className={classes.img} src={infinity.src} />
            {message && <p className={classes.message} >{message}</p>}
        </div>
    )
}
