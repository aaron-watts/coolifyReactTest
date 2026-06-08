export default function ShowInfoSelect({ show, season, handleSeasonSelect }) {
    const options = [];

    for (let seasonNum in show.episodes) {
        if (season === seasonNum) {
            options.push(
                <option selected="selected" value={seasonNum} key={seasonNum}>Season {seasonNum}</option>);
        } else {
            options.push(<option value={seasonNum} key={seasonNum}>Season {seasonNum}</option>);
        }
    }

    return (
        <form>
            <select onChange={handleSeasonSelect}>
                {options} 
            </select>
        </form>
    );
}
