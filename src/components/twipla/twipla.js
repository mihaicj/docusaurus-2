'use client'
import React, {useEffect, useState} from 'react';
import {LogLevel, TwiplaWorker} from "@twipla/worker/core";

// Default implementation, that you can customize
export default function Twipla() {
    useEffect(() => {
        console.log("Use Effect Twipla")
        const twiplaWorker = new TwiplaWorker({
            websiteId: 'ce671b0e-46ae-11f0-a7ae-960004340fd3',
            logLevel: LogLevel.DEBUG,
            env: 'production',
            trackUrlChanges: true,
            rewriteUrl: () => {
                return window.location.href
            }
        });
        console.log(twiplaWorker.run({tags: {test: 'test_value'}}))
    }, []);

    return <div>Tracking twipla</div>;
}
