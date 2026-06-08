import { Activity, useState, useEffect } from 'react';
import ShowsSearchForm from './ShowsSearchForm';
import Header from './Header';
import Home from './Home';
import Search from './Search';
import Show from './Show';
import './App.css';

function App() {
    const [screen, setScreen] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showID, setShowID] = useState();
    const [show, setShow] = useState({});
    const [season, setSeason] = useState();

    function gotoScreen(n) {
        if (n < 3) {
            setSeason(show.firstSeason);
        }
        setScreen(n);
    }

    function handleSeasonSelect(evt) {
        setSeason(evt.target.value);
    }

    function submit(query) {
        setSearchQuery(query);
        setScreen(2);
    }

    useEffect(function() {
        search(searchQuery);
    }, [searchQuery]);

    async function search(query) {
        console.log('Searching...');

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

    function handleShowClick(newShow) {
        if (newShow !== showID) {
            setShowID(newShow)
        }
        setScreen(3);
    }

    useEffect(function() {
        if (showID) fetchShowInfo(showID);
    }, [showID]);
    
    async function fetchShowInfo(id) {
        console.log('Fetching Show...');

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

            const firstSeason = data._embedded.episodes[0].season;

            setShow({
                ...data,
                firstSeason: firstSeason
            });
            setSeason(firstSeason);

        }).catch(function(err) {
            console.log('Fetch Error: ', err)
        });
    }

    return (
        <>
            <Header
                setScreen={setScreen}
                submit={submit}
            />
            <main>
                <Home screen={screen} />

                <Search
                    screen={screen}
                    searchResults={searchResults}
                    searchquery={searchQuery}
                    handleShowClick={handleShowClick}
                />

                <Show 
                    screen={screen}
                    show={show}
                    season={season}
                    gotoScreen={gotoScreen}
                    handleSeasonSelect={handleSeasonSelect}
                />
            </main>
        </>
    );
}

export default App;
