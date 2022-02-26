import React from "react";
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
    const photos = props.data;
    let pictures;

    // Display loading photos message while searching
    if (photos.length === 0 && props.loading) {
        pictures = <li className="not-found">
                        <p>Loading photos...</p>
                   </li>
    } else if (photos.length > 0) {
        pictures = photos.map(photo =>
            {
                return <Photo
                        farm={photo.farm}
                        id={photo.id}
                        key={photo.id}
                        server={photo.server}
                        secret={photo.secret}
                        title={photo.title}
                    />
            }
        );
    } else {
        pictures = <NotFound /> // Return the NotFound page if no matches found
    }
    return (
        <div className="photo-container">
            <h2>{ props.query }</h2>
            <ul>
                { pictures }
            </ul>
        </div>
    );
}

export default PhotoList;