import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData().then(setData);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {data ? <p>{data.Hello}</p> : <p>Loading...</p>}
            </header>
        </div>
    );
}

export default App;
