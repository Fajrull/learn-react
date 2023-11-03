import React, { useEffect } from "react";
import axios from "axios";

const Api = () => {
  useEffect(() => {
    getDataFromBackend();
  }, []);
};

const getDataFromBackend = async () => {
  let configApi = {
    url: "http://localhost:5000/hello/products",
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    let getData = await axios(configApi);
    console.log(getData);
  } catch (error) {
    console.log(error);
  }
};

export default Api;
