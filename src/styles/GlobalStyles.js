import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
        font-family: "Roboto";
        word-spacing: 0.01rem;
        scroll-behavior: smooth;
    } 

    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.accent};
    }


    body {
        background: ${(props) => props.theme.backgroundBody};
        color: ${(props) => props.theme.text};
        }

        a {
            text-decoration: none;
            color: unset;
        }

    button {
         border: none;
         border-radius: 4px;
         &:hover {
            cursor: pointer;
         }
     }

    h1 {
        color: ${(props) => props.theme.titles};        
    }
    .accent {
        background-color: ${(props) => props.theme.accent};
        color: ${(props) => props.theme.text};
    }
    ul {
        list-style-type: none;
    }
`;
