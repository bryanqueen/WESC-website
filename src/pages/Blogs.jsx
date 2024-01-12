import Navbar from "../components/Navbar";
import useDocumentTitle from '@rehooks/document-title'

function Blogs(props) {
    useDocumentTitle('Blogs')
    return (
        <div>
          <Navbar/>
        </div>
    );
}

export default Blogs;