import css from "./ErrorMessage.module.css";
export default function ErrorMessage({ error }) {
  return (
    <div className={css.error}>
      <p className={css.texterror}>Whoops there was an error plz reload...</p>
    </div>
  );
}
