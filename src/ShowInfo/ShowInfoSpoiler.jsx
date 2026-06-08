import ShowInfoSelect from './ShowInfoSelect';
import ShowInfoTable from './ShowInfoTable';
import './ShowInfoSpoiler.css';

export default function ShowInfoSpoiler({ show, season, handleSeasonSelect}) {
    return (
        <details className="ShowInfoSpoiler">
            <summary>Episodes</summary>
            
            <ShowInfoSelect
                show={show}
                season={season}
                handleSeasonSelect={handleSeasonSelect}
            />

            <ShowInfoTable
                show={show}
                season={season}
            />
        </details>
    );
}
