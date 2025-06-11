import React, {useEffect} from 'react';
import {LogLevel, TwiplaWorker} from "@twipla/worker";

// Default implementation, that you can customize
export default function Root({children}) {
    useEffect(() => {
        const twiplaWorker = new TwiplaWorker({
            websiteId: 'ce671b0e-46ae-11f0-a7ae-960004340fd3',
            logLevel: LogLevel.ERROR,
            env: 'production'
        });
        twiplaWorker.run({ tags: { test: 'test_value' } })
    }, []);

    return <>
        {children}
    </>;
}
