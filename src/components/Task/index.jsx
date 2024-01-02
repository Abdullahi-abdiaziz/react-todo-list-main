import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

export function Task({ task, onComplete, onDelete }) {
  return (
    <div className={styles.task}>
      <div onClick={() => onComplete(task.id)} className={styles.taskid}>
        <button className={styles.checkContainer}>
          {task.isCompleted ? (
            <BsFillCheckCircleFill className="check" />
          ) : (
            <div />
          )}
        </button>

        <p className={task.isCompleted ? styles.taskCompleted : ""}>
          {task.title}
        </p>
      </div>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} className="trash"/>
      </button>
    </div>
  );
}
