'use client'

import React, { useState, useEffect } from 'react'
import { mapDimensions } from '../../../utils'
import Image from 'next/image'
import Page, {ProfileProps} from './page_component';
import EditView, {EditProps} from './edit_component';
import styles from './profileStyles.module.css';


const ProfilePage = () => {
    const [data, setData] = useState({
        username:"testing",
        first_name:'John',
        last_name: 'Doe',
        email: 'testing@testing.com',
        bio:"This is a super long bio about a guy called billy bob jones the idiot",
        num_followers:29,
        num_following:29,
        date_joined:'October 20th, 2023',
        image: null,
        handle_edit: () => {
            setIsMain(false);
        },
        handleSave: (obj: any) => {
            setData((prevState) => ({
                ...prevState,
                username: obj.username,
                first_name: obj.first_name,
                last_name: obj.last_name,
                email: obj.email,
                bio: obj.bio,
                image: obj.image
              }));
            
            console.log(obj.image)
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