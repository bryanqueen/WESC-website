import Navbar from "../components/Navbar";
import useDocumentTitle from  '@rehooks/document-title';

function Scholarships(props) {
    useDocumentTitle('Scholarships')
    return (
        <div>
            <Navbar/>
        </div>
    );
}

export default Scholarships;