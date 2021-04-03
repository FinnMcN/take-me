import "./scss/index.scss";
import {
    Header,
    LocationSearchFirst,
    LocationSearchSecond,
    Sight,
    CitiesRate,
    SliderBlock,
    Subscribe,
    Map,
    VideoBlock,
    ContactUs,
    Reviews,
    TravelTags,
    ChooseTrip,
    DownloadApp,
    Footer,
} from "./Components";

function App() {
    return (
        <div className="wrapper">
            <Header
                nav={[
                    "Locations",
                    "Accommodation",
                    "Travel Guides",
                    "Where To Stay",
                    "Contact Us",
                    "Log In",
                ]}
            />
            <div className="border"></div>
            <LocationSearchFirst />
            <div className="border"></div>
            <LocationSearchSecond />
            <div className="border"></div>
            <Sight />
            <div className="border"></div>
            <CitiesRate />
            <div className="border"></div>
            <SliderBlock content="/sliderInfo.json" />
            <div className="border"></div>
            <Subscribe />
            <div className="border"></div>
            <ContactUs />
            <div className="border"></div>
            <Reviews />
            <div className="border"></div>
            <TravelTags />
            <div className="border"></div>
            <ChooseTrip />
            <div className="border"></div>
            <Map />
            <div className="border"></div>
            <VideoBlock />
            <div className="border"></div>
            <DownloadApp />
            <div className="border"></div>
            <Footer />
            <div className="border"></div>
        </div>
    );
}

export default App;
