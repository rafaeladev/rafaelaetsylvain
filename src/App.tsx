import {
    createRoutesFromElements,
    Route,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import './App.css';

import Home from './Home';
import PageTransition from './PageTransitions';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path='/'
                element={
                    <PageTransition>
                        <Home />
                    </PageTransition>
                }
            />
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
