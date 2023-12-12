// Importamos los hooks necesarios
import { useState } from "react";
// Importamos los PropTypes
import PropTypes from "prop-types";


export const CounterApp = ({ value }) => {

    // Primer valor es el nombre de nuestra variable y el segundo el setter y se iguala al hook con el valor inicial
    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {
        // Llamamos al setter de hook
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubstract}> -1 </button>
            <button onClick={handleReset}> Reset </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: 0,
};
