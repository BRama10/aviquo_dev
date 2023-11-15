import React, { useState, useEffect } from 'react'
import { mapDimensions } from '../../../utils'

export interface EditProps {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    bio: string;
    num_followers: number;
    num_following: number;
    handleUpload: () => void;
    handleDelete: () => void;
    handleCancel: () => void;
    handleSave: (obj:any) => void;
}

const Page: React.FC<EditProps> = ({
    username,
    email,
    first_name,
    last_name,
    bio,
    num_followers,
    num_following,
    handleCancel,
    handleDelete,
    handleSave,
    handleUpload
}) => {
    useEffect(() => {
        const useMD = () => mapDimensions('wrapper');

        // useMD();
        window.addEventListener('resize', useMD);


        return () => {
            window.removeEventListener('resize', useMD);
        };
    }, []);

    const [localUsername, setLocalUsername] = useState(username);
    const [localFirstName, setLocalFirstName] = useState(first_name);
    const [localLastName, setLocalLastName] = useState(last_name);
    const [localEmail, setLocalEmail] = useState(email);
    const [localBio, setLocalBio] = useState(bio);

    const handleUsernameChange = (e:any) => {
        setLocalUsername(e.target.value);
    };

    const handleFirstNameChange = (e:any) => {
        setLocalFirstName(e.target.value);
    };

    const handleLastNameChange = (e:any) => {
        setLocalLastName(e.target.value);
    };

    const handleEmailChange = (e:any) => {
        setLocalEmail(e.target.value);
    };

    const handleBioChange = (e:any) => {
        setLocalBio(e.target.value);
    };

    const handleLocalSave = () => {
        const userData = {
            username : localUsername,
            first_name : localFirstName,
            last_name : localLastName,
            email : localEmail,
            bio : localBio,
        }
        console.log(userData);
        handleSave({...userData});
    }

    return (
        <main id="wrapper" className={`min-h-screen h-full w-full bg-snow text-midnightblue font-poppins flex flex-col items-center`}>
            <div className="bg-snow shadow-[0px_-10px_32px_rgba(0,_0,_0,_0.25)] w-full h-[8%] self-start" />
            <div className="grid grid-cols-customC w-full h-full pt-[10%]">
                <div className="flex flex-col items-center">
                    <img className="w-[15%] h-auto object-cover rounded" alt="" src="/image-11@2x.png" />
                    <p className="text-2xl md:text-3xl font-bold pt-[2%]">@{username}</p>
                    <p className="text-xl md:text-2xl font-semibold pt-[0.5%]">{first_name}</p>
                    <div className="pt-[2%] flex flex-row items-center justify-start gap-[10px] text-center text-darkslateblue-300 text-lg md:text-2xl font-weight:700">
                        <div className="relative">
                            <b>{num_followers}</b>
                            <span> followers</span>
                        </div>
                        <div className="relative rounded-[50%] bg-darkslateblue-300 w-2 h-2" />
                        <div className="relative">
                            <b>{num_following}</b>
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
                        <input type="text" value={localUsername} onChange={handleUsernameChange} className="text-3xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit"></input>
                    </div>
                    <div className="pb-[3%] w-[90%]">
                        <div className="w-full h-full flex flex-row gap-x-5">
                            <div>
                                <div className="text-2xl font-medium text-darkslateblue-300 pb-[3%]">First Name</div>
                                <input type="text" value={localFirstName} onChange={handleFirstNameChange}  className="text-3xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit"></input>
                            </div>
                            <div>
                                <div className="text-2xl font-medium text-darkslateblue-300 pb-[3%]">Last Name</div>
                                <input type="text" value={localLastName} onChange={handleLastNameChange} className="text-3xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit"></input>
                            </div>
                        </div>

                    </div>
                    <div className="pb-[3%] w-[90%]">
                        <div className="text-2xl font-medium text-darkslateblue-300 pb-[3%]">Email</div>
                        <input type="text" value={localEmail} onChange={handleEmailChange} className="text-3xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit"></input>
                    </div>
                    <div className="pb-[3%] w-[90%]">
                        <div className="text-2xl font-medium text-darkslateblue-300 pb-[3%]">Bio</div>
                        <textarea value={localBio} onChange={handleBioChange} rows={6} className="text-xl pl-4 rounded-3xs box-border w-full h-auto border-[1px] border-solid border-darkslateblue-200 bg-inherit resize-none"></textarea>
                    </div>

                    <div className="pb-[3%] w-[90%] h-auto">
                        <div className="w-full h-full flex flex-row gap-x-5">
                            <button className="rounded-3xs bg-darkslateblue-100 w-1/4 h-full font-bold text-center text-white" onClick={handleLocalSave}>
                                Save
                            </button>
                            <button className="rounded-3xs border-2 text-darkslateblue-100 w-1/4 md:h-[50px] font-bold text-center border-darkslateblue-100" onClick={handleCancel}>
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