import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export function Task({ task, onComplete, onDelete }) {
  const { title, id } = task;
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 900, damping: 40 },
  };
  return (
    <motion.div {...animations} className={styles.task}>
      <div onClick={() => onComplete(id)} className={styles.taskid}>
        <button className={styles.checkContainer}>
          {task.isCompleted ? (
            <BsFillCheckCircleFill className="check" />
          ) : (
            <div />
          )}
        </button>

        <p className={task.isCompleted ? styles.taskCompleted : ""}>{title}</p>
      </div>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
      >
        <TbTrash size={20} className="trash" />
      </motion.button>
    </motion.div>
  );
}
