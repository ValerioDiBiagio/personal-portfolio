import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
    return (
        <>
            <Header sitename="VDB" />
            <main className="pt-20 bg-[url(./assets/bg-img.png)] relative min-h-screen bg-cover bg-center bg-fixed bg-no-repeat">
                <div className="">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DefaultLayout;