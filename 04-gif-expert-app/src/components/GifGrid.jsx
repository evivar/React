import PropTypes from "prop-types";
import { GifCard } from "./GifCard";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {/* En React un null no se renderiza */}
      {isLoading ? <h2>Cargando ...</h2> : null}

      <div className="card-grid">
        {gifs.map((image) => (
          <GifCard key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
