"use client";

import { WixClientContext } from "@/context/wixContect";
import { useContext } from "react";


export const useWixClient = () => {

    return useContext(WixClientContext);

};

