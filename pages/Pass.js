import React, { useState, useEffect, useRef } from 'react'
import QRCode from 'qrcode.react';
import Loading from '../components/loading';
import { useReactToPrint } from 'react-to-print';
import BoardingPass from './BoardingPass';



function Pass() {

    const [loader, setLoader] = useState(true)

    useEffect(() => {

        setTimeout(
            () => setLoader(false),
            6000
        );

    }, [])

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });



    return (
        <div>


            {loader ?
                <Loading />
                :
                <>
                    <BoardingPass reference={componentRef} />

                    <button className='w-[10%] h-[30px] rounded-lg bg-blue-700 mt-[5%] print' onClick={() => window.print()}>
                        <p className=' text-white font-medium'>Print</p>
                    </button>
                </>
            }

        </div>

    )
}

export default Pass