import { FC, useState } from "react";
import styled from "styled-components";
import CountryDetails from 'components/CountryDetails';
import CountryList from 'components/CountryList';
import CountryPreview from 'components/CountryPreview';
import { useGetCountriesQuery } from 'generated/graphql';

// #region styled
const Header = styled.h1`
  font-family: 'Luckiest Guy', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  text-align: center;
  font-size: 6rem;
  letter-spacing: 6px;
  color: ghostwhite;
  text-shadow: 0 2px 6px #000;
  background-color: #444;
  padding: 6rem 0;
  margin: 0;
  
  @media (max-width: 650px) {
    padding: 3rem 0;
    font-size: 3rem;
    letter-spacing: 3px;
  }
`

const BackgroundContainer = styled.div`
  background-color: whitesmoke;
`

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
// #endregion

const Country: FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const { data, loading } = useGetCountriesQuery({ variables: { count: 9 } });
  const handleClick = (name: string) => setSelectedCountry(name)
  return (
    <div>
      <Header>FUN WITH FLAGS</Header>
      <BackgroundContainer>
        <Wrapper>
          <CountryList>
            {loading && "Loading..."}
            {!loading && data && data.countries?.edges.map((country: any) => {
              const { name, flag } = country.node
              return (
                <CountryPreview key={name} isActive={selectedCountry === name} flag={flag} onClick={() => handleClick(name)} />
              )
            })}
          </CountryList>
        </Wrapper>
      </BackgroundContainer>
      <Wrapper>
        {selectedCountry && <CountryDetails name={selectedCountry} />}
      </Wrapper>
    </div>
  );
}

export default Country;