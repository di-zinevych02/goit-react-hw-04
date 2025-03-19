import css from "./ImageCard.module.css";
const ImageCard = ({ image, onClick }) => {
  return (
    <div className={css.card} onClick={() => onClick(image)}>
      <img className={css.img} src={image.urls.small} alt={image.description} />

      <div className={css.info}>
        <div className={css.infolist}></div>
        <span className={css.infoitem}>Description: </span>
        <span className={css.item}>
          {image.description || "No description available"}
        </span>
      </div>
      <div className={css.info}>
        <div className={css.infolist}></div>
        <span className={css.infoitem}>Likes: </span>
        <span className={css.item}>{image.likes}</span>
      </div>
      <div className={css.info}>
        <div className={css.infolist}></div>
        <span className={css.infoitem}>Location: </span>
        <span className={css.item}>
          {image.user.location || "Location unknown"}
        </span>
      </div>
    </div>
  );
};
export default ImageCard;
