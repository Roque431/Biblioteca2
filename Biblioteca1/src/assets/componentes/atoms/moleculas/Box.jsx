import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 40%;
  font-family: "Arial Black", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px; 
`;

const ArtistImage = styled.img`
  max-width: 100px;
  height: auto;
  margin-top: 10px; 
  margin-bottom: 10px; 
`;

const ArtistTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  background-color: #A0785A;
  border-radius: 100px;
  padding: 10px;
`;

const ArtistDescription = styled.div`
  font-size: 14px;
  margin-top: 10px; 
`;

export default function ArtistBox({ artist }) {
  return (
    <Box>
      <ArtistTitle>{artist.name}</ArtistTitle>
      <ArtistImage src={artist.imagen} alt={artist.name} />
      <ArtistDescription>{artist.descripcion}</ArtistDescription>
    </Box>
  );
}
