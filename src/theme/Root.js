import React, {useEffect, useState} from 'react';
import BrowserOnly from "@docusaurus/BrowserOnly";

// Default implementation, that you can customize
export default function Root({children}) {
    return <>
        {children}
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Twipla =
                    require('../components/twipla/twipla').default;
                return <Twipla />;
            }}
        </BrowserOnly>
    </>;
}
