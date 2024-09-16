import { useEffect, useState } from "react";


export function useFetch(fetchFn, initialValue) {
    const [fetchedData, setFetchedData] = useState(initialValue); // loading state - that we use to tell the user that we are fetching data
    const [isFetching, setIsFetching] = useState(); // data state - where we store the data that we are fetching
    const [error, setError] = useState(); // error state - that we use to show potential errors

    useEffect(() => {
        async function fetchData() {

            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }
            setIsFetching(false);
        }
        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        fetchedData,
        setFetchedData,
        error
    }
}