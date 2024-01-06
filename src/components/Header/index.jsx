import todoLogo from "/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";
import React from "react";
import { motion } from "framer-motion";

export function Header({ onAddTask }) {
  const [title, setTitle] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  const animations = {
    initial: { scale: 0, y: -200, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 900, damping: 60 },
  };

  return (
    <header className={styles.header}>
      <motion.img {...animations} src={todoLogo} alt="" />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="add a new task"
          value={title}
          onChange={onChangeTitle}
        />
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          create
          <AiOutlinePlusCircle size={20} />
        </motion.button>
      </form>
    </header>
  );
}
