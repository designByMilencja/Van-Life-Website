import styles from "../../style.js";

const OneImage = ({src, desc, date, onClick}) => {
    const handleClick = (event) => {
        event.stopPropagation();
        onClick()
    };
    return (
        <li className="thumbnail" onClick={handleClick}>
            <img src={src} className="p-1  rounded-[10px]" alt={desc}/>
            <p className={`${styles.paragraph} p-3`}>{desc}</p>
            <p className="text-gradient font-mono text-sm p-1">{date}</p>
        </li>
    )
}
export default OneImage
