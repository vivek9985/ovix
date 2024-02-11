import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Layout = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    );
};

export default Layout;