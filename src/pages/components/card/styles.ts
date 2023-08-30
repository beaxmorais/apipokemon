import styled from 'styled-components'

const CardStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100&display=swap');

    background-color: #444444;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;
    color: white;
    font-family: 'Roboto', sans-serif;
    cursor: pointer; 

    flex: 1; /* Distribui o espaço igualmente entre os elementos */
    min-width: 200px; /* Define uma largura mínima para evitar que fiquem muito estreitos */
    margin: 0 10px; 

    &:hover {
        background-color: #959494;
    }

    &:active {
        border: 2px solid white;
    }


`

export default CardStyle;