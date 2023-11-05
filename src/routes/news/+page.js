// @ts-nocheck

import { PUBLIC_BACKEND_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const fetchNews = async ()=>{
        const res =await fetch(PUBLIC_BACKEND_URL+"/api/news")
        return (await res.json()).data;
    }

    return {
        news : fetchNews()
    }
}