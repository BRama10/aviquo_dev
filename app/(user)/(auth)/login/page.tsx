"use client"

import { Input } from "@nextui-org/react";

import React, { useState, useEffect, useRef } from 'react'
import { EyeFilledIcon } from "../EyeFilledIcon";
import { EyeSlashFilledIcon } from "../EyeSlashFilledIcon";

import { usePathname, useSearchParams } from 'next/navigation'
import { login } from "./authFunction";
import { Button } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "@nextui-org/react";


const LoginPage = () => {

    const searchParams = useSearchParams();
    const [route, setRoute] = useState<string>(searchParams.get('callbackUrl')!)
    const [isNew, setIsNew] = useState<string | null>(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

   

    useEffect(() => {
        if (isNew) {
            console.log(isNew);
            toast('User Created! Now Sign In!',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
    }, [isNew])

    useEffect(() => {
        setIsNew(searchParams.get('state'))
    }, [])
    

    return (
        <main id="wrapper" className={`min-h-screen h-full w-full font-poppins flex flex-col items-center justify-center bg-white`}>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="justify-self-center flex flex-col w-[50%] justify-center items-center">
                <div className="text-4xl text-darkslateblue-100 font-[600]">
                    LOG IN
                </div>
                <div className="pt-[5%] w-[50%]">
                    <div className="text-xl text-darkslateblue-100 pb-[1.5%]">Username</div>
                    <Input
                        //   label="Password"
                        variant="bordered"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="text-lg border-solid border-darkslateblue-200 bg-inherit text-black"
                    />
                </div>
                <div className="pt-[5%] w-[50%]">

            <div className="text-xl text-darkslateblue-100 pb-[1.5%]">Password</div>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-lg border-solid border-darkslateblue-200 bg-inherit pb-[2%] text-black"
            />
            <a className="text-deepslateblue-100 underline self-start" href="#">Forgot Password</a>
        </div>
                
        <form
            action={login}
            className='w-1/2'>
            <input className='hidden' name="route" value={route} />
            <input className='hidden' name="username" value={username} />
            <input className='hidden' name="password" value={password} />
            <Button type="submit" size="lg" radius="md" className="w-full mt-[5%] bg-darkslateblue-100 text-white text-xl" > Log In </Button>
        </form>
           <div className="pt-[1%]">
                    <div className="flex justify-between items-center">
                        <div className="pr-2 text-xl text-darkslateblue-100 pb-[1.5%]">
                            No Account?
                        </div>
                        <Link href="/register" className="pl-2 text-xl text-darkslateblue-100 underline">
                            Sign Up
                        </Link>
                    </div>
                </div>      
        </div>
        </main>
    );

};

export default LoginPage