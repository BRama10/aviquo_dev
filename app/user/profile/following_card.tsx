import React, { useState, useEffect } from 'react'


export const Card = () => {
    return (
        <div className="rounded-xl bg-white shadow-[-2px_2px_18px_rgba(0,_0,_0,_0.25)] w-5/6 self-center h-[300px] mt-[5%] flex flex-col justify-start">
            <div className="grid grid-cols-customB mt-[3%] pb-[1%]">
                <p className="pl-[3%] text-3xl md:text-4xl font-semibold">Followed Opportunities</p>
                <u><a href="#" className="text-xl md:text-2xl">{`View All ->`}</a></u>
            </div>
            <img className="w-1/2 self-center h-[1px] font-[400]" alt="" src="/vector-3.svg"></img>
        </div>
    )
}