import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input } from "@nextui-org/react";
import { SearchIcon } from './SearchIcon.jsx';

import { signIn, signOut, auth } from "auth"
import { redirect } from "next/navigation"

export interface ValueProps {
    loggedIn: boolean;
}

export default async function NavBar({ loggedIn }: ValueProps) {
    return (
        <Navbar isBordered className='bg-darkslateblue-400'>
            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10 ",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={24} />}
                    type="search"
                />
            </NavbarContent>
            <NavbarContent justify="end">
                {!loggedIn ?
                    (<><NavbarItem className="hidden lg:flex">
                        <Button as={Link} className='bg-darkslateblue-400 border-white text-white' href="/login" variant='bordered'>
                            Log In
                        </Button>
                    </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} className='bg-darkslateblue-400 border-white text-white' href="/register" variant='bordered'>
                                Sign Up
                            </Button>
                        </NavbarItem></>) : (<NavbarItem>
                            <form
                                action={async () => {
                                    "use server";
                                    await signOut();
                                }}
                            >
                                <Button type="submit" className='bg-darkslateblue-400 border-white text-white' variant='bordered'>
                                    Log Out
                                </Button>
                            </form>
                        </NavbarItem>)
                }
            </NavbarContent>
        </Navbar>
    );
}
