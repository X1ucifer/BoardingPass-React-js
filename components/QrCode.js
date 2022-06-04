import React from 'react'
import QRCode from 'qrcode.react';


function QrCode() {
    return (
        <>

            <div class="ticket">
                
                    <div class="qr">
                        <QRCode style={{marginTop:"30px",marginBottom:"30px"}} value="https://boarding-pass-react-57ainw6ic-x1ucifer.vercel.app/Pass" size="200" renderAs="canvas" />
                    </div>
               
            </div>

        </>
    )
}

export default QrCode