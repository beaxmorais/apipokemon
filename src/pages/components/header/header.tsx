import HeaderStyles from "./styles"
import Image from "next/image"
import React, { ChangeEvent, useState } from 'react';

interface Props {
    queryName: (name: string) => void
}

export default function Header ({queryName}: Props) {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
        queryName(e.target.value)
        setInputValue(e.target.value)
    }

    return(
        <HeaderStyles>
            <div className="searchbar">
                <input value={inputValue} type="search" onChange={handleChange}></input>
                <button id="searchbtn"><Image 
                    src="/lupeicon.png"
                    alt="icone de lupa"
                    width={10}
                    height={10}
                    /></button>
                <button id="clearbtn" onClick={() => { setInputValue('')}}> Limpar </button>
            </div>
        </HeaderStyles>
    )
}