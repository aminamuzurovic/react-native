import { useEffect, useState } from 'react'
import config from '../api/config'

export default () => {
    const[results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
        console.log('hi there');
        try{
        const response = await config.get('/search', {
            params: {
                limit: 50,
                //term, same as term : term
                term: searchTerm,
                location: 'San Jose'
            }
        });
        setResults(response.data.businesses)
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    };    

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return[searchApi, results, errorMessage];
}