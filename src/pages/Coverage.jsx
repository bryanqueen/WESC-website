import Navbar from "../components/Navbar";
import useDocumentTitle from '@rehooks/document-title';
import { Outlet } from "react-router-dom";

function Coverage(props) {
    useDocumentTitle('Our Coverage')
    return (
        <div>
            <Navbar/>
            Coverage
            <Outlet/>
        </div>
    );
}

export default Coverage;