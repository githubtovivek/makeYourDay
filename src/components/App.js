import React from 'react';
import { Header } from './Header';

import Movies from './Movie/Movies';

const App = () => (
    <div className="container">
        <Header title='Make My Day' />
        <div className="mt-lg-5">
            <Movies />
        </div>
    </div>
);

export default App;