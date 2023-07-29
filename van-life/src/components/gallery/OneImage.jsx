
const OneImage = ({src,desc, onClick}) => {
    const handleClick = (event) => {
        event.stopPropagation();
        onClick()
    };
    return (
        <li className="thumbnail" onClick={handleClick}>
            <img src={src} loading="lazy" className="p-1  rounded-[10px]" alt={desc} tabIndex={0}/>
        </li>
    )
}
export default OneImage
