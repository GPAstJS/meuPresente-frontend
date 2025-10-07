// import { useState } from "react";
import { apiFetch } from "../utils/api-fetch";

export const useEditProfile = () => {
    const call = async (data) => {
        const payload = await apiFetch("", "POST", data);

        console.log(payload);
    };

    return {
        call,
    };
};
