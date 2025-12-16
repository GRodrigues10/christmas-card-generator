import { useState } from "react";

export function useFontSize(initialSize=36){
    const [fontSize, setFontSize] = useState<number>(initialSize);

    function changeFontSize(size:number){
        setFontSize(size);
    }

    return{
        fontSize,
        changeFontSize
    }

}