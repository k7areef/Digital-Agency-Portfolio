import React from 'react';
function useChangeTitle(title = "DX - Home") {
    React.useEffect(() => {
        window.document.title = "DX - " + title;
    }, [title]);
    return null;
};
export default useChangeTitle;