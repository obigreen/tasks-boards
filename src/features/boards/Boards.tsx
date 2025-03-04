import {S} from './Boards_Styles'

type Board = {
    id: number;
    name: string;
};


export const Boards = () => {

    const boards: Board[] = [
        {id: 1, name: 'Board one'},
    ];


    return (
        <S.Container>
            {boards.map((board) => (
                <S.CardName key={board.id} to={`/boards/${board.id}`}>
                    {board.name}
                </S.CardName>
            ))}
        </S.Container>
    );
};


