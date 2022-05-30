import React, { useState, useEffect, useRef } from 'react'
import QRCode from 'qrcode.react';
import Loading from '../components/loading';
import { useReactToPrint } from 'react-to-print';
import BoardingPass from './BoardingPass';



function Pass() {

    const [loader, setLoader] = useState(true)
    const [tick, setTick] = useState(true)

    useEffect(() => {

        setInterval(
            () => setLoader(false)
            , 6000);

        // setTimeout(
        //     () => setLoader(false),
        //     6000
        // );



    }, [])

    // useEffect(() => {

    //     setTimeout(
    //         () => setTick(false),
    //         6000
    //     );

    //     console.log("ssdfd")

    // }, [])

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