import { useState, useEffect } from 'react';

export function useFetchShow({ query }) {
    const [show, setShow] = useState({});
    const [showID, setShowID] = useState();

    async function fetchShowInfo(id) {
        let data;
        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`).then(function(response) {
            if (response.status == 200) return response.json();
        }).then(function(data) {
            data.episodes = {};

            if (data._embedded.episodes.length) {
                data._embedded.episodes.forEach(function(episode) {
                    if (!(`${episode.season}` in data.episodes)) {
                        data.episodes[`${episode.season}`] = [];
                    }
                    data.episodes[`${episode.season}`].push(episode);
                });
            }

            setShow({...data});
        }).catch(function(err) {
            console.log('Fetch Error: ', err)
        });
    }

    useEffect(function() {
        if (showID) fetchShowInfo(showID);
    }, [showID]);

    return show;
}
