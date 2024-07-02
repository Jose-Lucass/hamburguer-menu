import styled from "styled-components";

export const LocationContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhereBurguer = styled.h1`
  font-size: 40px;
`;

export const Description = styled.h4`
  font-size: 22px;
  margin-top: 24px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;
  margin-top: 24px;
`;

export const LocationSearch = styled.input`
  width: 600px;
  height: 20px;
  padding: 11px 29px;
  border-radius: 40px;
  border: 1px solid black;
`;

export const SearchButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #0a0a0a;
  color: white;
  
  padding: 15px 41px;
  border-radius: 50px;
`;

export const List = styled.a`
  color: #65666c;
  font-size: 22px;
  font-weight: 700;
  margin-top: 67px;
`;

