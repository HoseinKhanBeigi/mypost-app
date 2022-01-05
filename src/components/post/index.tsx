import styles from "./Post.module.scss";
import React, { FC } from "react";

type PostProps = {
    name: string;
    content: string;
    date: string
}
export const Post: FC<PostProps> = ({ content, date }) => {

    return (
        <>
            <p className={styles.postContent}>
                {content}
            </p>
            <p className={styles.postDate}>{date}</p>
        </>)

};


