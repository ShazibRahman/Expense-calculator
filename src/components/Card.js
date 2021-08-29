import './Card.css'
function Card(props) {
    const classNames = 'card ' + props.className

    return (
        < div className={classNames} >
            {props.children}

        </div>
    )
}

export default Card