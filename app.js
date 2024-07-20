import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Main from './src/Components/Main';
import About from './src/Components/About';
import Error from './src/Components/Error';

const root = ReactDOM.createRoot(document.getElementById("root"))

const appRoter = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement: <Error />
    },
    {
        path:'/about',
        element: <About />
    }
])

root.render(<RouterProvider router={appRoter}/>)