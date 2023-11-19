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
        <main id="wrapper" className={`min-h-screen h-full w-full font-poppins flex flex-col items-center justify-center bg-white`}>
            <div className="justify-self-center flex flex-col w-[50%] justify-center items-center">
                <div className="text-4xl text-darkslateblue-100 font-medium">
                    LOG IN
                </div>
                <div className="pt-[5%] w-[50%]">
                    <div className="text-xl text-darkslateblue-300 pb-[3%]">Username</div>
                    <Input
                        //   label="Password"
                        variant="bordered"
                        placeholder="Enter your username"

                        className="text-lg border-solid border-darkslateblue-200 bg-inherit"
                    />
                </div>
                <div className="pt-[5%] w-[50%]">
                    <div className="text-xl text-darkslateblue-300 pb-[3%]">Password</div>
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
                        className="text-lg border-solid border-darkslateblue-200 bg-inherit pb-[2%]"
                    />
                    <a className="text-deepslateblue-300 underline self-start" href="#">Forgot Password</a>
                </div>
                
                <Button size="lg" radius="md" className="w-[50%] mt-[5%] bg-darkslateblue-100 text-white text-xl" > Log In </Button>
            </div>
        </main>
    );

};

export default LoginPage