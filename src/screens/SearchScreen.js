import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  // console.log(props);
  const [term, setTerm] = useState(" ");
  const [searchApi, result, eroorMessage] = useResult();
  const filterResultByPrice = (price) => {
    // price === '$' || '$$' || "$$$"

    return result.filter((result) => {
      return result.price === price;
    });
  };
  // const [result, setResult] = useState([]);
  // const [eroorMessage, setErrorMessage] = useState("");

  // const searchApi = async (searchTerm) => {
  //   try {
  //     const response = await yelp.get("/search", {
  //       params: {
  //         limit: 50,
  //         term: searchTerm,
  //         location: "san jose",
  //       },
  //     });
  //     setResult(response.data.businesses);
  //   } catch (err) {
  //     setErrorMessage("somehting went wrong");
  //   }
  // };

  // //Call searchApi when component
  // // is first rendereds : BAD CODE
  // // searchApi("pasta");

  // useEffect(() => {
  //   searchApi("pasta");
  // }, []);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {eroorMessage ? <Text>{eroorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          result={filterResultByPrice("$")}
          title="Cost Effective"
          // navigation={navigation}
        />
        <ResultsList
          result={filterResultByPrice("$$")}
          title="Bit Pricier"
          // navigation={navigation}
        />
        <ResultsList
          result={filterResultByPrice("$$$")}
          title="Big Spender"
          // navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
