import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";


export const useDarkMode = (key,initialValue) => {
const [someValue, setSomeValue] = useLocalStorage('darkmode',initialValue)
const darkModeSelect = document.querySelector("body");

    useEffect(() => {
     
        if(someValue === true){
            
            return (
                darkModeSelect.classList.add("dark-mode")          
                 
        )
        } else{
            return (
                darkModeSelect.classList.remove("dark-mode")
            )
        }


  }, [someValue]);

return [someValue, setSomeValue];
}
