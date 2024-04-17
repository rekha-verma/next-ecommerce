import CategoryBar from "../CategoryBar";
import Header from "../Header";

export default function Layout({ children }) {
    return (
        <div className="layout-container">
            <div className="layout-content pl-5 pr-5">
                <div className="header-container flex items-center flex-col pt-5"><Header /></div>
                <div className="layout-main mt-10 ">
                    <CategoryBar />
                    {children}
                </div>
            </div>
        </div>

    );
}
