import '../features/boards/list/BoardList.css';

type ButtonProps = {
    title: string
    onClick?: () => void
    className?: string
}


export const Button = (props: ButtonProps) => {

    const {title, onClick, className} = props

    return (
        <button className={`button ${className}`} onClick={onClick}>{title}</button>
    );
};
