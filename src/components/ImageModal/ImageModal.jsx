import Modal from "react-modal";
import css from "./ImageModal.module.css";
//Встановлює елемент DOM, який є основним для застосунку (root). Це допомагає для доступності (accessibility), наприклад, для того, щоб приховати інший контент від екранних читачів, коли модалка відкрита.
Modal.setAppElement("#root");
export default function ImageModal({ onClose, image }) {
  //перетворює image в true або false, тобто Якщо image є (тобто передано об’єкт), буде true, модалка відкрита. Якщо image немає (null або undefined), буде false, модалка закрита
  const isOpen = Boolean(image);
  return (
    <Modal
      isOpen={isOpen}
      className={css.modal}
      //функція, яка викликається при кліку поза модалкою або натисканні Escape.
      onRequestClose={onClose}
      //задає стиль для фону (оверлею) позаду модалки.
      overlayClassName={css.overlay}
      //Перевіряє: якщо image існує (не null), рендерить вміст модалки.
    >
      {image && (
        <div>
          <img
            className={css.img}
            src={image.urls.regular}
            alt={image.description}
          />

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
      )}
    </Modal>
  );
}
