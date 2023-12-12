// Importamos los PropTypes (npm i prop-types)
import PropTypes from 'prop-types';

// Sacarlo fuera del functional component si no se modifica ni se usa un hook
// En caso de ser un objeto o usamos el JSON.stringify() ó imprimimos cada campo
const newMessage = {
  message: "Hola mundo",
  title: "Ernesto",
};

function getMessage() {
  return "Hola mundo!!";
}

export const FirstApp = ( { title, subtitle, name } ) => {

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
  );
};

/**
 * Usualmente se colocan al final
 * 
 * propTypes = {} => Definimos el tipo de los props y si es obligatorio o nó
 * defaultProps = {} => Definimos los valores por defecto de los props
 */
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
  name: "Ernes"
}
