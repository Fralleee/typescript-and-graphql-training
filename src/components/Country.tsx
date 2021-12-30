import { FC, useState } from "react";
import styled from "styled-components";
import CountryDetails from 'components/CountryDetails';
import CountryList from 'components/CountryList';
import CountryPreview from 'components/CountryPreview';
import { useGetCountriesQuery } from 'generated/graphql';

// #region styled
const Container = styled.div`
  margin: 100px 0;
`

const Header = styled.h1`
  font-family: 'Luckiest Guy', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  text-align: center;
  font-size: 6rem;
  letter-spacing: 6px;
  color: ghostwhite;
  text-shadow: 0 2px 6px #111;
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
    <Container>
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
    </Container>
  );
}

export default Country;