import { Activity } from 'react';
import ShowInfo from './ShowInfo';

export default function Show({ screen, show, season, gotoScreen, handleSeasonSelect }) {
    return (
        <Activity mode={screen === 3 ? "visible" : "hidden"}>
            <div style={{marginBottom: "1.3rem"}} onClick={function() {gotoScreen(2)}}>Back to search</div>
            <ShowInfo show={show} season={season} handleSeasonSelect={handleSeasonSelect} />
        </Activity>
    );
};
