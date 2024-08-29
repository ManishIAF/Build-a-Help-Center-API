import {Outlet} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const PageLayOut = () => {
    return (
        <div>
            <NavBar />
                <Outlet />
           <Footer />
        </div>
    );
}

export default PageLayOut;