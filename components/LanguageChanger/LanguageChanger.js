'use client'
import React from 'react';

function changeLanguage(language, path) {
    console.log(`Changing language to ${language} and path to ${path}`);
}

function LanguageChanger() {
    return (
        <div id="language-container">
            <div className="d-flex justify-content-between languageBtn " data-bs-toggle="collapse"
                 data-bs-target="#languageCollapse" aria-expanded="false" aria-controls="languageCollapse">
                <div><span className="flag-icon flag-icon-grc"></span>
                </div>
                <div></div>
            </div>
            <div className="collapse" id="languageCollapse">
                <span className="" onClick={() => changeLanguage('greek', '')}> <span
                    className="flag-icon flag-icon-grc mx-1"></span>
            </span>
            <span className="" onClick={() => changeLanguage('english', '')}> <span
                className="flag-icon flag-icon-usa mx-1"></span> </span>
        </div>
</div>
);
}

export default LanguageChanger;
