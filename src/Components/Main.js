import Header from './Header'
import { Outlet } from 'react-router-dom';
import '../../style.css';
const Main = () => {
    return(
        <div className="app-container">
            <Header />
            <Outlet />
             {/* Footer */}
        </div>
    )
}

export default Main;