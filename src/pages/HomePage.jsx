
import Hero from "../components/Hero";
import WescSumm from "../components/WescSumm";
import WescPathways from "../components/WescPathways";
import QuickForm from "../components/QuickForm";
import OurMarket from "../components/OurMarket";
import Testimonial from "../components/Testimonial";
import UniquePrep from "../components/UniquePrep";
import Footer from "../components/Footer";
import BlogsOverview from "../components/BlogsOverview";

function HomePage(props) {
    return (
        <div>
            <Hero/>
            <WescSumm/>
            <WescPathways/>
            <QuickForm/>
            <OurMarket/>
            <Testimonial/>
            <BlogsOverview/>
            <UniquePrep/>
            <Footer/>
        </div>
    );
}

export default HomePage;