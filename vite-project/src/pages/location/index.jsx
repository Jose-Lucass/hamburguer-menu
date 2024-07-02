import React from 'react';
import { Description, List, LocationContainer, LocationSearch, Search, SearchButton, WhereBurguer } from "./styles.js";

export default function Busca() {
    return (
        <LocationContainer>
            <WhereBurguer>ONDE ESTAMOS?</WhereBurguer>
            <Description>Digite sua localização e descubra uma unidade perto de você!</Description>
            <Search>
                <LocationSearch type="text" placeholder="Ex: São Paulo, SP" /> {/* Corrigido para usar placeholder */}
                <SearchButton>Buscar</SearchButton>
            </Search>
            <List>Lista de unidades, Aqui!</List>
        </LocationContainer>
    );
}
