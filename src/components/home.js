import React from 'react';
const Home = ({ greetings }) => (
    <div className='app-home'>
    {
        greetings.map((row, i) => 
            <div key={i}>
              {row}
            </div>
        )
    }
    </div>
);

export default Home;
