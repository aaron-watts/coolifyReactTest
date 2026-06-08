import ShowInfoTableRow from './ShowInfoTableRow';

export default function ShowInfoTable({ show, season }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Air Date</th>
                </tr>
            </thead>
            <tbody>
                {show.episodes && show.episodes[season].map((ep, i) => (
                    <ShowInfoTableRow
                    key={ep.id}
                    i={i}
                    ep={ep}
                    show={show}
                    season={season} />
                ))}
            </tbody>
        </table>
    );
}
