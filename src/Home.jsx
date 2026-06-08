import { Activity } from 'react';

export default function Home({ screen }) {
    return (
        <Activity mode={screen === 1 ? "visible" : "hidden"}>
            <div id="default">
                <h2>Follow your shows with Google Calendar and Apps Script</h2>
                <p>
                Clone the repo: <a href="https://github.com/aaron-watts/tv.aaronwatts.dev" target="_blank">https://github.com/aaron-watts/tv.aaronwatts.dev</a>
                </p>
                <p className="notice">NOTE: requires some (very basic) knowledge of GitHub, Python and JavaScript</p>
            </div>
        </Activity>
    );
};
