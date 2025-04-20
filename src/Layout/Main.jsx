import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* dashboard aside */}

        <div>
        <Outlet />
        </div>

        </div>
    );
};

export default Main;