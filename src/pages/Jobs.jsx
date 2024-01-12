import Navbar from "../components/Navbar";
import useDocumentTitle from '@rehooks/document-title';

function Jobs(props) {
    useDocumentTitle('Jobs')
    return (
        <div>
            <Navbar/>
        </div>
    );
}

export default Jobs;