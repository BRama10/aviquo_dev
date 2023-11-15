import React, { useState, useEffect } from 'react'
import { mapDimensions } from '../../../utils'

const Page = () => {
    useEffect(() => {
        const useMD = () => mapDimensions('wrapper');

        // useMD();
        window.addEventListener('resize', useMD);


        return () => {
            window.removeEventListener('resize', useMD);
        };
    }, []);

    return (
        <main id="wrapper" className={`min-h-screen h-full w-full bg-snow text-midnightblue font-poppins flex flex-col items-center`}>
            <div className="bg-snow shadow-[0px_-10px_32px_rgba(0,_0,_0,_0.25)] w-full h-[8%] self-start" />
            <div className="grid grid-cols-customC w-full h-full pt-[10%]">
                <div className="flex flex-col items-center">
                    <img className="w-[15%] h-auto object-cover rounded" alt="" src="/image-11@2x.png" />
                    <p className="text-2xl md:text-3xl font-bold pt-[2%]">@username</p>
                    <p className="text-xl md:text-2xl font-semibold pt-[0.5%]">first name</p>
                    <div className="pt-[2%] flex flex-row items-center justify-start gap-[10px] text-center text-darkslateblue-300 text-lg md:text-2xl font-weight:700">
                        <div className="relative">
                            <b>29</b>
                            <span> followers</span>
                        </div>
                        <div className="relative rounded-[50%] bg-darkslateblue-300 w-2 h-2" />
                        <div className="relative">
                            <b>29</b>
                            <span> following</span>
                        </div>
                    </div>
                    <button className="mt-[3%] rounded-3xs bg-darkslateblue-100 w-[350.48px] h-[55px] font-bold text-center text-white">
                        Upload Avatar
                    </button>
                    <button className="mt-[4%] rounded-3xs border-2 text-darkslateblue-100 w-[350.48px] h-[55px] font-bold text-center border-darkslateblue-100">
                        Delete Avatar
                    </button>
                </div>
                <div className="box-border w-px h-[810.51px] border-r-[1px] border-solid border-darkslateblue-200 self-center"></div>
                <div className="flex flex-col items-start">
                    <div className="pb-[3%] w-[90%]">
                        <div className="text-2xl font-medium text-darkslateblue-300 pb-[3%]">Username</div>
                        <input type="text" className="text-3xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit"></input>
                    </div>
                    <div className="pb-[3%] w-[90%]">
                        <div className="w-full h-full flex flex-row gap-x-5">
                            <div>
                                <div className="text-2xl font-medium text-darkslateblue-300 pb-[3%]">First Name</div>
                                <input type="text" className="text-3xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit"></input>
                            </div>
                            <div>
                                <div className="text-2xl font-medium text-darkslateblue-300 pb-[3%]">Last Name</div>
                                <input type="text" className="text-3xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit"></input>
                            </div>
                        </div>

                    </div>
                    <div className="pb-[3%] w-[90%]">
                        <div className="text-2xl font-medium text-darkslateblue-300 pb-[3%]">Email</div>
                        <input type="text" className="text-3xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit"></input>
                    </div>
                    <div className="pb-[3%] w-[90%]">
                        <div className="text-2xl font-medium text-darkslateblue-300 pb-[3%]">Bio</div>
                        <textarea rows={6} className="text-xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit resize-none"></textarea>
                    </div>

                    <div className="pb-[3%] w-[90%] h-auto">
                        <div className="w-full h-full flex flex-row gap-x-5">
                        <button className="rounded-3xs bg-darkslateblue-100 w-1/4 h-full font-bold text-center text-white">
                        Save 
                    </button>
                    <button className="rounded-3xs border-2 text-darkslateblue-100 w-1/4 md:h-[50px] font-bold text-center border-darkslateblue-100">
                        Cancel
                    </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
};


export default Page;