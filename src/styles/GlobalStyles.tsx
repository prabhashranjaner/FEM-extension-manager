import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{

    &, &.dark{
        --col-grad:linear-gradient(180deg, #040918 0%, #091540 100%);
        --col-bg:hsl(226, 25%, 17%);
        --col-bg-light:sl(225, 23%, 24%);
        --col-title:hsl(200, 60%, 99%);
        --col-border:hsl(226, 11%, 37%);
        --col-danger:hsl(3, 86%, 64%);
        --col-danger-hover:hsl(3, 71%, 56%);
         --col-highlight:hsl(226, 11%, 37%);

    }

    &.light{
        --col-grad:linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%);
         --col-bg:hsl(200, 60%, 99%);
          --col-bg-light:hsl(217, 61%, 90%);
         --col-title:hsl(227, 75%, 14%);
          --col-border:hsl(0, 0%, 78%);
          --col-danger:hsl(3, 71%, 56%);
          --col-danger-hover:hsl(3, 77%, 44%)
           --col-highlight:hhsl(0, 0%, 93%);
    }

    --col-text:hsl(226, 11%, 37%);
    --col-gray-dark:hsl(225, 23%, 24%);
    --col-gray:hsl(226, 11%, 37%);
   

    --border-radius: 10px;

}


*,*::before,*::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    min-height: 100dvh;
    background-image: var(--col-grad);
    font-family: "Noto Sans", sans-serif;
    color: var(--col-text);
}

button{
    outline: none;
    border: none;
    cursor: pointer;
}


`;
