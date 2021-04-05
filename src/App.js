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
            <LocationSearchFirst />
            <LocationSearchSecond />
            <Sight />
            <CitiesRate />
            <SliderBlock content="./sliderInfo.json" />
            <Subscribe />
            <ContactUs />
            <Reviews />
            <TravelTags />
            <ChooseTrip />
            <Map />
            <VideoBlock />
            <DownloadApp />
            <Footer />
        </div>
    );
}

export default App;
