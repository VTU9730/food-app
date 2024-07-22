import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Main from './src/Components/Main';
import About from './src/Components/About';
import Error from './src/Components/Error';
import Cart from './src/Components/cart';
import Contact from './src/Components/Contact';
import Body from './src/Components/Body';
import Restaurant from './src/Components/Restaurant';

// import Bikes from './src/Components/Bikes';
const Bikes = lazy(() => import('./src/Components/Bikes'))

const root = ReactDOM.createRoot(document.getElementById("root"))

const appRoter = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[  
            {
                path:'/',
                element: <Body />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/cart',
                element: <Cart />
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/bikes',
                element: <Suspense fallback = {<h1>Loading....</h1>} ><Bikes /></Suspense>
            },
            {
                path:'/restaurant/:id',
                element: <Restaurant />
            }
        ],
        errorElement: <Error />
    },
   
])

root.render(<RouterProvider router={appRoter}/>)