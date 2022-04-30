import React from 'react'
import QRCode from 'qrcode.react';


function QrCode() {
    return (
        <>

            <div class="ticket">
                <header>
                    <div class="company-name">
                      Airlines
                    </div>
                    <div class="gate">
                        <div>
                            Gate
                        </div>
                        <div>
                            B4
                        </div>
                    </div>
                </header>
                <section class="airports">
                    <div class="airport">
                        <div class="airport-name">
                            Charlotte
                        </div>
                        <div class="airport-code">
                            CLT
                        </div>
                        <div class="dep-arr-label">
                            Departing
                        </div>
                        <div class="time">
                            7:45am
                        </div>
                    </div>
                    <div class="airport">
                        <div class="airport-name">
                            Tampa
                        </div>
                        <div class="airport-code">
                            TPA
                        </div>
                        <div class="dep-arr-label">
                            Arriving
                        </div>
                        <div class="time">
                            9:15am
                        </div>
                    </div>
                </section>
                <section class="place">
                    <div class="place-block">
                        <div class="place-label">
                            Group
                        </div>
                        <div class="place-value">
                            2
                        </div>
                    </div>
                    <div class="place-block">
                        <div class="place-label">
                            Seat
                        </div>
                        <div class="place-value">
                            2A
                        </div>
                    </div>
                    <div class="place-block">
                        <div class="place-label">
                            Term
                        </div>
                        <div class="place-value">
                            B
                        </div>
                    </div>
                    <div class="qr">
                        <QRCode style={{marginTop:"30px"}} value="https://boarding-pass-react-js.vercel.app/Pass" size="200" renderAs="canvas" />
                    </div>
                </section>
            </div>

        </>
    )
}

export default QrCode