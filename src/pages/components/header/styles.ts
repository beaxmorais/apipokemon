import styled from 'styled-components'

const HeaderStyles = styled.div`
    background-color: #444444;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 20px 10px;
    gap: 10px;

    input {
        outline: none;
        background-color: rgba(255, 255, 255, 0.2);
        border: none;
        font-family: 'Roboto', sans-serif;
        color: white;
    }

    .searchbar {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    #searchbtn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: white;
    }

    #clearbtn {
        background-color: rgba(255, 255, 255, 0.2);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: white;
    }
    }

`

export default HeaderStyles;