import { Divider, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { DonationForm } from '../cmps/DonationForm'
import { NavFunnel } from '../cmps/NavFunnel'

// Use styles for styling the Material UI elements only
const useStyles = makeStyles(() => ({
    dividerStyle: {
        marginBottom: '35px',
        backgroundColor: '#FB8A4E',
        height: '1px'
    }
}))

export function DonationApp() {
    const classes = useStyles()
    return (
        <section className="homepage flex column">
            <div className="hero">
                <img src={require("../assets/img/jumbo-bgi.jpeg").default} alt="" />
            </div>
            <main className="donation-main main-container" >
                <Divider className={classes.dividerStyle} />
                <NavFunnel />
                <DonationForm />
                <Divider className={classes.dividerStyle} />
            </main>
        </section>
    )
}
