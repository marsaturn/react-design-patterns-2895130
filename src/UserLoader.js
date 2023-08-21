import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import React from "react";

export const UserLoader = ({ userId, children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            setUser(response.data);
        })();
    }, [userId]);

    console.log(user)
    return (
        <>
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { user });
            }

            return child;

        })}
        </>
    )
}