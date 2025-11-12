import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const DefaultLayout: React.FC = () => {
    return (
        <>
            <Header sitename="VDB" />

            <main className="pt-15 relative min-h-screen bg-cover bg-center bg-fixed bg-no-repeat">
                <div className="page-content">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </>
    )
}

export default DefaultLayout;