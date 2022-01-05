import styles from "./PostForm.module.scss";
import React, { FC } from "react";

type PostProps = {

}
export const PostForm: FC<PostProps> = ({ }) => {

    return (
        <form>
            <textarea className={styles.formContent}></textarea>
            <button className={styles.buttonContent}>Add New Tweet</button>
        </form>)

};
