import { useState } from 'react';
import ShowsSearchFormIcon from './ShowsSearchFormIcon';

export default function ShowsSearchForm({ submit }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        submit(evt.target.query.value);
        setSearchTerm("");
    };

    return (
        <form onSubmit={handleSubmit} style={{marginBlock: "2.6rem -0.8rem"}}>
            <div>
                <input
                name="query"
                id="query"
                onChange={handleChange}
                value={searchTerm}
                placeholder="Search for Shows"
                type="text" />
                <button type="submit">
                    <ShowsSearchFormIcon />
                </button>
            </div>
        </form>
    );
};
