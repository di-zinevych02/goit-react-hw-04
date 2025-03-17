import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onClickImage} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
