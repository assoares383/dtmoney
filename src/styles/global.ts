import { createGlobalStyle } from 'styled-components';

export const GlobaStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
    }

    * {
        margin: 0;
        padiing: 0;
        box-sizing: border-box;
    }

    body { 
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    
`;