import { Activity } from 'react';
import SearchResult from './SearchResult';

export default function Search({ screen, searchResults, searchQuery, handleShowClick }) {
    return (
        <Activity mode={screen === 2 ? "visible" : "hidden"}>
            <div style={{marginBottom: "1.3rem"}}>Search Results for "{searchQuery}"</div>
            {searchResults.map((show, i) => (
                <SearchResult
                    key={show.show.id}
                    show={show}
                    handleShowClick={handleShowClick}
                />
            ))}
        </Activity>
    );
}
