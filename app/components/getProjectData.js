import { client } from "../lib/sanity";

async function getData() {
    const query = `
    
    `;

    const data = await client.fetch(query);
    return data;
}

export default async function getProjectsData() {
    const data = await getData();
    return data;
}