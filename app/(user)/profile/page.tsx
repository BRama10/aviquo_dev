'use client'

import React, { useState, useEffect } from 'react'

import Page, { ProfileProps } from './page_component';
import EditView, { EditProps } from './edit_component';
import styles from './profileStyles.module.css';
import axios from 'axios';
import type { HeadBlobResult, PutBlobResult } from '@vercel/blob';

const ProfilePage = () => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const raw_response = await axios.get(`/api/user?email=test@test.com`);
                const response = raw_response.data;



                let image: any = null;

                if (response.pfp) {
                    const imageData = await axios.get(`/api/retrieve?filename=${response.pfp}`);
                    image = imageData.data as HeadBlobResult;
                }

                const date = new Date(response.createdAt);
                const formattedDate = date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });



                setData((prevState) => ({
                    ...prevState,
                    username: response.username,
                    first_name: response.firstName,
                    last_name: response.lastName,
                    bio: response.bio,
                    num_followers: response.numFollowers,
                    num_following: response.numFollowing,
                    date_joined: formattedDate,
                    image: image
                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const [data, setData] = useState({
        username: "testing",
        first_name: 'John',
        last_name: 'Doe',
        bio: "This is a super long bio about a guy called billy bob jones the idiot",
        num_followers: 29,
        num_following: 29,
        date_joined: 'October 20th, 2023',
        image: null as HeadBlobResult | PutBlobResult | null,
        handle_edit: () => {
            setIsMain(false);
        },
        handleSave: async (obj: any) => {
            setData((prevState) => ({
                ...prevState,
                username: obj.username,
                first_name: obj.first_name,
                last_name: obj.last_name,
                // email: obj.email,
                bio: obj.bio,
                image: obj.image
            }));

            const save = await axios.put(`/api/user?email=test@test.com`, {
                pfp: obj.image ? obj.image.url : null,
                firstName: obj.first_name,
                lastName: obj.last_name, 
                bio: obj.bio,
                username: obj.username
            });

            console.log(save);
            setIsMain(true);
        },
        handleDelete: () => {

        },
        handleCancel: () => {
            setIsMain(true);
        },
        handleUpload: () => {

        },

    });


    const [isMain, setIsMain] = useState(true);

    return (
        <>
            {isMain ? (<div className={`${styles.transition_slide}`}><Page
                username={data.username}
                first_name={data.first_name}
                bio={data.bio}
                num_followers={data.num_followers}
                num_following={data.num_following}
                date_joined={data.date_joined}
                image={data.image}
                handleEdit={data.handle_edit}
            /></div>) : (
                <div className={`${styles.transition_slide}`}><EditView
                    username={data.username}
                    first_name={data.first_name}
                    last_name={data.last_name}
                    bio={data.bio}
                    num_followers={data.num_followers}
                    num_following={data.num_following}
                    image={data.image}
                    // date_joined={data.date_joined}
                    // handleEdit={data.handle_edit}
                    handleCancel={data.handleCancel}
                    handleUpload={data.handleUpload}
                    handleSave={data.handleSave}
                    handleDelete={data.handleDelete}
                // email={data.email}
                /></div>
            )}
        </>)

    // return (
    //     <EditView />
    // )
}

export default ProfilePage