'use client'

import React, { useState, useEffect } from 'react'
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../EyeFilledIcon";
import { EyeSlashFilledIcon } from "../EyeSlashFilledIcon";
import {Button} from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useRouter } from 'next/navigation'



const SignupPage = () => {
    const router = useRouter()

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSame, setIsSame] = useState<boolean | null>(null);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);

    const handleSubmit = () => {
        if(isSame == false) {
            toast.error("Passwords aren't matching!")
            console.log('hey')
        } else {
            const data = {
                firstName: '',
                lastName: '',
                password: password,
                email: email,
                username: username,
                pfp: null,
                bio: 'Hi! I\'m a new user!',
                numFollowers: 0,
                numFollowing: 0,
            }
            axios.post('/api/user', data)
  .then(response => {
    // Handle the success response
    // console.log('Response:', response.data);
    router.replace('/login?state=new')
  })
  .catch(error => {
    // Handle the error
    console.log(error)
    toast.error("User couldn't be created!")
  });
        }
    }


    return (
        <main id="wrapper" className={`min-h-screen h-full w-full font-poppins flex flex-col items-center justify-center bg-white`}>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <div className="justify-self-center flex flex-col w-[50%] justify-center items-center">
                <div className="text-4xl text-darkslateblue-100 font-[600]">
                    SIGN UP
                </div>
                <div className="pt-[2%] w-[50%]">
                    <div className="text-xl text-darkslateblue-100 pb-[1.5%]">Email</div>
                    <Input
                        //   label="Password"
                        variant="bordered"
                        placeholder="Enter your username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-lg border-solid border-darkslateblue-200 bg-inherit"
                    />
                </div>
                <div className="pt-[2%] w-[50%]">
                    <div className="text-xl text-darkslateblue-100 pb-[1.5%]">Username</div>
                    <Input
                        //   label="Password"
                        variant="bordered"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="text-lg border-solid border-darkslateblue-200 bg-inherit"
                    />
                </div>
                <div className="pt-[2%] w-[50%]">
                    <div className="text-xl text-darkslateblue-100 pb-[1.5%]">Password</div>
                    <Input
                        //   label="Password"
                        variant="bordered"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                </div>
                <div className="pt-[2%] w-[50%]">
                    <div className="text-xl text-darkslateblue-100 pb-[1.5%]">Confirm Password</div>
                    <Input
                        //   label="Password"
                        variant="bordered"
                        placeholder="Enter your password"
                        onChange={(e) => setIsSame(e.target.value == password)}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibilityConfirm}>
                                {isVisibleConfirm ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisibleConfirm ? "text" : "password"}
                        className="text-lg border-solid border-darkslateblue-200 bg-inherit pb-[2%]"
                    />
                </div>
                
                
                <Button size="lg" radius="md" className="w-[50%] mt-[3%] bg-darkslateblue-100 text-white text-xl" onClick={handleSubmit}> Sign Up </Button>
            </div>
        </main>
    );

};

export default SignupPage