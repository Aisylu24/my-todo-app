import './Modal.css';

export const Modal = ({ active, setActive, children, cancelHandler }) => {

    const onClick = () => {
       setActive(false)
        cancelHandler()
    }

    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={onClick}
        >
            <div
                className={active ? "modalContent active" : "modalContent"}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};