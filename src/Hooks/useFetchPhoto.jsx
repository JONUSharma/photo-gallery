import { useEffect, useState } from "react";
export default function useFetchPhoto() {
    // state to store data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // fetch data from api
    useEffect(()=> {
        const fetchPhoto = async()=> {
            try {
                const res = await fetch("https://picsum.photos/v2/list?limit=30");
                const data = await res.json();
                setData(data);
            } catch (error) {
                setError("Failed to fetch data", error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchPhoto();
    })
    return {
        data,
        loading,
        error
    }
}