import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import React from "react";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl)
            setState(response.data);
        })();
    }, [resourceUrl]);

    return (
        <>
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { [resourceName]: state });
            }

            return child;

        })}
        </>
    )
}