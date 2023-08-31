import clsx from "clsx";
import styles from "./Stack.module.css";

type StackProps = {
  type?: "horizontal" | "vertical";
  children: React.ReactNode;
  className?: string;
};

const Stack: React.FC<StackProps> = ({
  type = "vertical",
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        styles.stack,
        type == "vertical" ? styles.vertical : styles.horizontal
      )}
    >
      {children}
    </div>
  );
};

export { Stack };
