import Navbar from "../components/Navbar";
import useDocumentTitle from '@rehooks/document-title'

function Coverage(props) {
    useDocumentTitle('Our Coverage')
    return (
        <div>
            <Navbar/>
        </div>
    );
}

export default Coverage;