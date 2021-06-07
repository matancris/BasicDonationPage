import { Checkbox, Typography } from '@material-ui/core'
import React from 'react'

export default function DonationPaymentsCheckbox({ currDonation, handleChange, onSetCurrDonation }) {
    return (
        <section className="checkbox-wrapper flex space-between">
            <Typography variant='h6'>
                <Checkbox
                    checked={currDonation.isPayments}
                    onChange={() => onSetCurrDonation('isPayments', !currDonation.isPayments)}
                    color="primary"
                    name="isPayments"
                />
                         באופן חד פעמי ב
                        <span style={{ margin: '0px 8px' }}>
                    <select name="paymentsNum" onChange={handleChange} defaultValue={2}>
                        {[...Array(12).keys()].map((num, idx) =>
                            // @Comment - this Method purpose is to build an array eficiently from 12 numbers and render the numbers starting with month 1 and til 12.
                            <option key={idx} value={idx + 1}>{idx + 1}</option>)}
                    </select>
                </span>
                        תשלומים
                    </Typography>
            <Typography variant='h6'>
                <Checkbox
                    checked={!currDonation.isPayments}
                    onChange={() => onSetCurrDonation('isPayments', !currDonation.isPayments)}
                    color="primary"
                    name="isPayments"
                />
                        הוראת קבע בסכום זה למשך
                        <span style={{ margin: '0px 8px' }}>
                    <select name="paymentsNum" onChange={handleChange} defaultValue={2}>
                        {[...Array(23).keys()].map((num, idx) =>
                            // @Comment - this Method purpose is to build an array eficiently from 23 numbers and render the numbers starting with month 2 and til 24.
                            <option key={idx} value={idx + 2}>{idx + 2}</option>)}
                    </select>
                </span>
                        חודשים
                    </Typography>
        </section>
    )
}
