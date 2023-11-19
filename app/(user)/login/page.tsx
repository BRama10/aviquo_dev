'use client'

import React, { useState, useEffect } from 'react'
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import {Button} from "@nextui-org/react";



const LoginPage = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <main id="wrapper" className={`min-h-screen h-full w-full font-poppins flex flex-col items-center bg-white`}>
            <div className="pt-[15%] flex flex-col w-[50%] pl-[10%]">
                <div className="pt-[5%] text-5xl text-darkslateblue-100 font-semibold self-start">
                    LOG IN
                </div>
                <div className="pt-[10%] w-[90%]">
                    <div className="text-2xl text-darkslateblue-300 pb-[3%]">Username</div>
                    <Input
                        //   label="Password"
                        variant="bordered"
                        placeholder="Enter your username"

                        className="text-xl border-solid border-darkslateblue-200 bg-inherit"
                    />
                </div>
                <div className="pt-[10%] w-[90%]">
                    <div className="text-2xl text-darkslateblue-300 pb-[3%]">Password</div>
                    <Input
                        //   label="Password"
                        variant="bordered"
                        placeholder="Enter your password"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="text-xl border-solid border-darkslateblue-200 bg-inherit"
                    />
                </div>
                <a className="text-deepslateblue-300 underline pt-[2%]" href="#">Forgot Password</a>
                <Button radius="md" className="w-[90%] mt-[5%] bg-darkslateblue-100 text-white text-2xl" > Log In </Button>
            </div>
        </main>
    );

};

export default LoginPage