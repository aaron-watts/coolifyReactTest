import { noImage } from '../utils';
import './ShowInfoHeader.css';

export default function ShowInfoHeader({show}) {
    return (
        <div className="ShowInfoHeader">
            <div>
                <h2>{show.name}</h2>
                <p>ID: {show.id}</p>
                <p>Status: {show.status}</p>
            </div>
            <img src={show.image ? show.image.medium: noImage} />
        </div>
    );
}
