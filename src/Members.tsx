import React from 'react';


type setBoardName = {
    setBoardTitle: (name: string) => void
}

export const Members= ({setBoardTitle}: setBoardName) => {
    React.useEffect(() => {
        setBoardTitle('Members');
    }, [setBoardTitle]);

    return (
        <div style={{ color: 'white', padding: 20 }}>
            <h2>Members page content</h2>
        </div>
    );
}