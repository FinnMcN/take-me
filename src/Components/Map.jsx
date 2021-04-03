import React from "react";

function Map() {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11074.380217717691!2d37.61237819307466!3d55.74890659280979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5759f5b76b%3A0xde502cd817a1b053!2z0JzQsNCy0LfQvtC70LXQuSDQki7QmC4g0JvQtdC90LjQvdCwINC90LAg0JrRgNCw0YHQvdC-0Lkg0L_Qu9C-0YnQsNC00Lg!5e0!3m2!1sru!2sru!4v1613571066445!5m2!1sru!2sru"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"></iframe>
        </div>
    );
}

export default Map;
