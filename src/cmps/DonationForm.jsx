import { Button, InputAdornment, makeStyles, OutlinedInput } from '@material-ui/core'
import React, { useState } from 'react'
import clsx from 'clsx';
import { DonationBtnsList } from './DonationBtnsList';
import DonationPaymentsCheckbox from './DonationPaymentsCheckbox';

// Use styles for styling the Material UI elements only
const useStyles = makeStyles((theme) => ({
    buttonNextStep: {
        borderRadius: 0,
        boxShadow: 'none',
        padding: '0.35rem 2rem',
        backgroundColor: '#FB8A4E',
        color: 'white',
        fontSize: '1.56rem',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    InputStyle: {
        height: '8.125rem',
        width: '20rem',
        marginInlineEnd: '2.5rem',
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
        [theme.breakpoints.up('lg')]: {
            width: '25.6rem',
          },
    },
    adornment: {
        '& .MuiTypography-root': {
            fontSize: '50px',
            fontWeight: 700,
            marginLeft: '50px',
            color: '#465f73'
        },

    },
    active: {}, // require area according the MUI doc
}));

// Array of the donation options. Can be taken from a service in addition. For now every btn contains "sum" key only, but can be added more keys in the future like dynamic text for example.
const donationBtns = [
    {
        "sum": 50,
    },
    {
        "sum": 100,
    },
    {
        "sum": 180,
    },
    {
        "sum": 250,
    }
]

export function DonationForm() {
    const classes = useStyles();

    /* State */
    const [currDonation, setCurrDonation] = useState({ sum: 0, isPayments: true, paymentsNum: 2 })

    /* Functions */

    const onNextStep = (ev) => {
        // Prevents the defaultive refresh of the submit botton in the form
        ev.preventDefault()
        // Output to the console
        console.log('Donation Details:', currDonation);
    }

    const onSetCurrDonation = (type, data) => {
        setCurrDonation({ ...currDonation, [type]: data })
    }

    // In this current form, this function is for the select paymentsNum only, but ready to get more form fields.
    const handleChange = ({ target }) => {
        const { name, value } = target
        setCurrDonation({ ...currDonation, [name]: value })
    }

    return (
        <section className="donation-form">
            <h3>מה הסכום שתרצו לתרום? </h3>
            <form onSubmit={onNextStep}>
                <div className="donation-sum-form flex flex-wrap space-between">
                    <OutlinedInput
                        className={classes.InputStyle}
                        type={'number'}
                        value={currDonation.sum}
                        startAdornment={<InputAdornment position="end" classes={{ root: classes.adornment }}>₪</InputAdornment>}
                    />

                    <DonationBtnsList
                        donationBtns={donationBtns}
                        onSetCurrDonation={onSetCurrDonation}
                    />

                </div>
                <DonationPaymentsCheckbox
                    currDonation={currDonation}
                    onSetCurrDonation={onSetCurrDonation}
                    handleChange={handleChange}
                />

                <div className="submit-btn flex">
                    <Button
                        className={classes.buttonNextStep}
                        type="submit"
                    >
                        {'לשלב הבא>'}
                    </Button>
                </div>
            </form>
        </section >
    )
}
