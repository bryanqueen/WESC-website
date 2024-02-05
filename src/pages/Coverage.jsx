import Navbar from "../components/Navbar";
import useDocumentTitle from '@rehooks/document-title'

function Coverage(props) {
    useDocumentTitle('Our Coverage')
    return (
        <div>
            <Navbar/>
            Coverage
        </div>
    );
}

export default Coverage;