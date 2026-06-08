export default function ShowInforTableRow({ show, season, i, ep }) {
    return (
        <tr>
            <td>{season.length < 2 ? `0${season}` : season}x{(i+1).toString().length < 2 ? `0${i+1}` : i+1}</td>
            <td>{ep.name}</td>
            <td>{ep.airdate}</td>
        </tr>
    );
}
