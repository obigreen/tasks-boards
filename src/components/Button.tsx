import '../features/boards/list/BoardList.css';

type ButtonProps = {
    title: string
    onClick?: () => void
}


export const Button = (props: ButtonProps) => {

    const {title, onClick} = props

    return (
        <button className={"button"} onClick={onClick}>{title}</button>
    );
};
