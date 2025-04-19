import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            //dashboard aside

            //Outlet
            <Outlet />

        </div>
    );
};

export default Main;