import React from 'react';

// Default implementation, that you can customize
export default function Root({children}) {
    return <>
        {children}

        <script dangerouslySetInnerHTML={{ __html: "(function(v,i,s,a,t){v[t]=v[t]||function(){(v[t].v=v[t].v||[]).push(arguments)};if(!v._visaSettings){v._visaSettings={}}v._visaSettings[a]={v:'1.0',s:a,a:'1',t:t};var b=i.getElementsByTagName('body')[0];var p=i.createElement('script');p.defer=1;p.async=1;p.src=s+'?s='+a;b.appendChild(p)})(window,document,'//app-worker.visitor-analytics.io/main.js','ce671b0e-46ae-11f0-a7ae-960004340fd3','va')" }} />
    </>;
}
