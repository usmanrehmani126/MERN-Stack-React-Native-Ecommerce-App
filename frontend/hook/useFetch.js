import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        'http://192.168.100.65:3000/api/products/',
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return {data, isLoading, error, reFetch};
};

export default useFetch;

const styles = StyleSheet.create({});
