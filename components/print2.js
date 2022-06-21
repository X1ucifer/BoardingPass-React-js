import React from 'react'
import QRCode from 'qrcode.react';



function Print2() {
    return (
        <div className='mb-[40px]  column1 hidden column1'>
            <div className='w-[210px] relative h-[890px]  ml-[auto] mr-[auto]'>
                <div className=' absolute left-[1%]'>

                    <div className=''>

                        <QRCode value="https://boarding-pass-react-js.vercel.app/Pass" size="218" renderAs="canvas" />

                    </div>
                    <div className=''>


                    </div>
                    <hr />
                    <br></br>
                    <br></br>

                    <hr />
                    <br></br>
                    <br></br>
                    <hr />

                    <div className='flex justify-evenly'>
                        <div className=''>
                            <h1 className=' font-bold text-lg'>DFNL,VGML</h1>
                        </div>
                        <div>
                            <h1>6E 5098</h1>
                            <h1>25 Mar 2022</h1>
                        </div>

                    </div>

                    <hr />

                    <hr />

                    <div className='flex justify-between'>
                        <div>
                            <h1>MATTA/MAYANK MR</h1>
                            <h1>PNR : QJRD8N</h1>
                            <h1>25 Mar 2022</h1>
                            <h1>Seat - 15E</h1>
                        </div>
                        <span className=' bg-black text-white border-2 border-zinc-900  pt-[15px]' style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed"
                        }}>
                            SEQ:001
                        </span>

                    </div>

                    <hr />

                    <hr />

                    <div className='flex justify-between'>

                        <span className=' bg-black text-white border-2 border-zinc-900  pt-[15px]' style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed"
                        }}>
                            SEQ:001
                        </span>
                        <div>
                            <h1>MATTA/MAYANK MR</h1>
                            <h1>PNR : QJRD8N</h1>
                            <h1>25 Mar 2022</h1>
                            <h1>Seat - 15E</h1>
                        </div>


                    </div>

                    <hr />

                    <hr />


                    <div className='flex justify-evenly'>
                        <div className=''>
                            <h1 className=' font-bold text-lg'>DFNL,VGML</h1>
                        </div>
                        <div>
                            <h1>6E 5098</h1>
                            <h1>25 Mar 2022</h1>
                        </div>

                    </div>

                    <hr />

                    <hr />
                    <br></br>
                    <br></br>
                    <hr />
                    <hr />

                    <h1 className='mb-2'>DELHI(T1) To JAIPUR(T1)</h1>

                    <div className=''>

                        <QRCode value="https://boarding-pass-react-js.vercel.app/Pass" size="218" renderAs="canvas" />


                    </div>
                    <div>
                        {/* <QRCode value="https://boarding-pass-react-js.vercel.app/Pass" size="140" renderAs="canvas" /> */}

                    </div>
                    <hr />
                    <hr />

                    {/* <div className=''>

                        <Barcode width="1px" height="50px" value="6E5098 SEQ001" />

                    </div>
                    <div>
                        <Barcode width="1px" height="50px" value="6E5098 SEQ001" />

                    </div> */}

                </div>


            </div>
        </div>
    )
}

export default Print2