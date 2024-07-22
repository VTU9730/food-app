import Header from './Header';
import UserClass from './UserClass';
import { Outlet } from 'react-router-dom';
import '../../style.css';
const Main = () => {
    return(
        <div className="app-container">
            <Header />
            <UserClass ed="B.Tech" />
            <Outlet />
             {/* Footer */}
        </div>
    )
}

export default Main;