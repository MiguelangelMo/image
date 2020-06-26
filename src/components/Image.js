import React, { useState } from 'react'

const Image = (props) => {

    const { largeImageURL, likes, previewURL, tags, views } = props.image;

    return (
        <div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text"> {likes} Me Gustas</p>
                    <p> {views} Vistas</p>
                </div>
                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn brn-primary btn-block"
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}

export default Image;