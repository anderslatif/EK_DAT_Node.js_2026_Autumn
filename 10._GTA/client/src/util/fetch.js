const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchGet(endpoint) {
    const response = await fetch(BASE_URL + endpoint, {
        credentials: 'include'
    });
    return await response.json();
}

export async function fetchPost(endpoint, body) {
    const response = await fetch(BASE_URL + endpoint, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return await response.json();
}