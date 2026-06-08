import { useState } from 'react';
import ShowInfoHeader from './ShowInfoHeader';
import ShowInfoSpoiler from './ShowInfoSpoiler';

export default function ShowInfo({ show, season, handleSeasonSelect }) {
    return (
        <>
            <ShowInfoHeader show={show} />
            <ShowInfoSpoiler
                show={show}
                season={season}
                handleSeasonSelect={handleSeasonSelect}
            />
        </>
    );
};
