export function useSearch(query) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(function() {
        search(query);
    }, [searchQuery]);

    async function search(query) {
        if (query.length) {
            let data;
            fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(function(response) {
                if (response.status === 200) return response.json();
                throw Error('Something Went Wrong!');
            }).then(function(data) {
                setSearchResults(function(prevData) {
                    return [...data];
                });
            }).catch(function(err) {
                console.log('Fetch Error: ', err);
            });
        }
    }

    return [searchQuery, searchResults];
}
