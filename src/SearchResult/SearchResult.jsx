import { noImage } from '../utils';
import './SearchResult.css';

export default function SearchResult({ show, handleShowClick }) {
    return (
        <div className="SearchResult">
            <div>
                <h2 onClick={() => handleShowClick(show.show.id)}>{show.show.name}</h2>
                <p>ID: {show.show.id}</p>
                <p>Status: {show.show.status}</p>
            </div>
            <img src={show.show.image ? show.show.image.medium : noImage}
                onClick={() => handleShowClick(show.show.id)} />
        </div>
    );
}
