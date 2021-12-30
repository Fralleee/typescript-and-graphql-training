import { FC } from "react";
import { useGetSpecificCountryQuery } from 'generated/graphql';
import styled from "styled-components";

// #region styled
const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;  
  padding: 2rem;
  min-height: 200px;
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 600px;
  
  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;  
  }
`

const BackgroundImage = styled.div<{ image: string | null | undefined }>`
  position: absolute;
  left: 50%;
  height: 400px;
  width: 800px;
  margin-top: -2rem;
  transform: translateX(-50%);

  opacity: 0.05;
  z-index: -1;
  filter: blur(12px);

  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (max-width: 650px) {
    display: none;
  }
`

const Image = styled.img`
  width: 220px;
  box-shadow: rgba(50, 50, 93, 0.45) 0px 6px 24px -2px;
  height: auto;
`

const Information = styled.div`
  padding-left: 4rem;

  @media (max-width: 650px) {
    width: 100%;
    padding-left: 0;
    padding-top: 2rem;
    text-align: center;
  }
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
      <BackgroundImage image={country?.flag} />
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
