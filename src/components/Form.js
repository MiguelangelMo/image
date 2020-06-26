import React, { useState } from 'react'
import Error from './Error'

const Form = (props) => {

    const [state, setstate] = useState('')
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        e.preventDefault();

        const validError = state.length < 1 || state.trim() === "" ? setError(true) : setError(false);
        props.setstate(state)
    }

    return (
        <form onSubmit={handleChange}>
            <div className="row">
                <div className="form-group col-md-8">

                    <input
                        type="search"
                        name="search"
                        id="search"
                        className="form-control form-control-lg"
                        onChange={(e) => setstate(e.target.value)}
                        placeholder="Buscar..."
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        value="Buscar..."
                        className="btn btn-success btn-lg btn-block"
                    />
                </div>
            </div>
            {error ? <Error title="El campo debe estar completado" /> : null}
        </form>
    );
}

export default Form;