import PropTypes from 'prop-types';

export const GifCard = ({title, url}) => {
  return (
    <>
      <div className="card">
        <img src={url} />
        <p> {title} </p>
      </div>
    </>
  );
};

GifCard.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}