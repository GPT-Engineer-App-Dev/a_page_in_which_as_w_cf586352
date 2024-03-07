import React, { useState } from "react";
import { Box, Select, FormControl, FormLabel, Container, Heading } from "@chakra-ui/react";

// Mock data for countries, currencies, states, and cities
const countries = {
  USA: {
    currency: "USD",
    states: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      "New York": ["New York City", "Buffalo", "Rochester"],
    },
  },
  India: {
    currency: "INR",
    states: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bengaluru", "Mysore", "Mangalore"],
    },
  },
};

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [currency, setCurrency] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCurrency(countries[country].currency);
    setStates(Object.keys(countries[country].states));
    setSelectedState("");
    setCities([]);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(countries[selectedCountry].states[state]);
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={6}>Select Country and View Details</Heading>
      <FormControl id="country-select" mb={4}>
        <FormLabel>Select Country</FormLabel>
        <Select placeholder="Select country" onChange={handleCountryChange} value={selectedCountry}>
          {Object.keys(countries).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </FormControl>

      {selectedCountry && (
        <>
          <Box>Currency: {currency}</Box>

          <FormControl id="state-select" my={4}>
            <FormLabel>Select State</FormLabel>
            <Select placeholder="Select state" onChange={handleStateChange} value={selectedState}>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </FormControl>

          {selectedState && (
            <FormControl id="city-select">
              <FormLabel>Select City</FormLabel>
              <Select placeholder="Select city">
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Select>
            </FormControl>
          )}
        </>
      )}
    </Container>
  );
};

export default Index;
