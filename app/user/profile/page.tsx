'use client'

import React, { useState, useEffect } from 'react'
import { mapDimensions } from '../../../utils'
import Image from 'next/image'
import Page, {ProfileProps} from './page_component';
import EditView from './edit_component';


const ProfilePage = () => {
    const [data, setData] = useState({
        username:"testing",
        first_name:'John',
        bio:"This is a super long bio about a guy called billy bob jones the idiot",
        num_followers:29,
        num_following:29,
        date_joined:'October 20th, 2023',
    });

    return (
        <Page
            username={data.username}
            first_name={data.first_name}
            bio={data.bio}
            num_followers={data.num_followers}
            num_following={data.num_following}
            date_joined={data.date_joined}
        />
    )
    // return (
    //     <EditView />
    // )
}

export default ProfilePage