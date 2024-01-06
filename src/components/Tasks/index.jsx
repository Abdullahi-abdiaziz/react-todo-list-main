import { Task } from "../Task";
import styles from "./tasks.module.css";
import { motion, AnimatePresence } from "framer-motion";

export function Tasks({ tasks, onComplete, onDelete }) {
  const taskQuantity = tasks.length - 1;
  const completeTasks = tasks.filter((task) => task.isCompleted).length;
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 900, damping: 40 },
  };
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <motion.span {...animations}>{taskQuantity + 1}</motion.span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed</p>
          <motion.span {...animations}>
            {completeTasks} of {taskQuantity + 1}
          </motion.span>
        </div>
      </header>

      <div className={styles.list}>
        <AnimatePresence>
          {tasks.map((task) => {
            return (
              task && (
                <Task
                  key={task.id}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: 300 }}
                  task={task}
                  onComplete={onComplete}
                  onDelete={onDelete}
                />
              )
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
