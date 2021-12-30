import { FC } from "react";
import { useGetSpecificCountryQuery } from 'generated/graphql';
import styled from "styled-components";

// #region styled
const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  min-height: 200px;
  margin: 2rem auto;
  max-width: 600px;
`

const Image = styled.img`
  width: 220px;
  box-shadow: rgba(50, 50, 93, 0.45) 0px 6px 24px -2px;
  height: auto;
`

const Information = styled.div`
  padding-left: 4rem;
`

const Name = styled.h1`
  margin: 0;
`
// #endregion

interface ICountryDetails {
  name: string
}

const CountryDetails: FC<ICountryDetails> = ({ name }) => {
  const { data, loading } = useGetSpecificCountryQuery({ variables: { name } });
  const country = data?.countries?.edges[0]?.node
  return (
    <DetailsContainer>
      {loading ? <p>Loading ...</p> : !loading && country?.name === name ? (
        <>
          <Image src={country.flag?.toString()} alt="Flag" />
          <Information>
            <Name>{country.name}</Name>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </Information>
        </>
      ) : <p>No data</p>}
    </DetailsContainer>
  );
}

export default CountryDetails;
