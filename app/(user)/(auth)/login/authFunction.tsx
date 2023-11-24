'use server'

import { signIn, signOut, auth } from "auth"
import { redirect } from "next/navigation"

export async function login(formData: FormData) {
    // console.log(formData);

    const credentials = {
        username: formData.get('username'),
        password: formData.get('password'),
    };


    const url = await signIn('credentials', {
        ...credentials,
        redirect: false,
    });

    console.log(url)
    redirect('/');
}