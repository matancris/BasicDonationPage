import { Button } from '@material-ui/core'
import React from 'react'

// Can be divided to another component "BtnPreview", if time permits.
export function DonationBtnsList({ donationBtns, onSetCurrDonation }) {
    return (
        <section className="btns-list flex flex-wrap justify-center">
            {donationBtns.map((donationBtn, idx) =>
                <div className="btn-preview" key={idx}>
                    <Button onClick={() => onSetCurrDonation('sum', donationBtn.sum)}>
                        <div className="flex column justify-center">
                            <h3>בחרו תרומה</h3>
                            <div className="btn-sum-label" ><span>₪</span>{donationBtn.sum}</div>
                        </div>
                    </Button>
                </div>
            )}
        </section>
    )
}
