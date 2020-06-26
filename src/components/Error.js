import React from 'react';

const Error = (props) => {
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div class="alert alert-primary" role="alert">
                    <p className="text-center font-weight-bold">{props.title}</p>
                </div>
            </div>
        </div>
    );
}

export default Error;