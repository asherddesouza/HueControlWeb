import styles from "./button.module.css";

type ButtonProps = {
  content: string;
  onClickEvent: () => void;
};

export default function Button({ content, onClickEvent }: ButtonProps) {
  return (
    <button onClick={onClickEvent} className={styles.button}>
      {content}
    </button>
  );
}
