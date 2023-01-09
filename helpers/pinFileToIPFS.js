import { env } from "process";

//imports needed for this function
const axios = require("axios");
// const fsp = require("fs");
// const fs = fsp.promises;
const FormData = require("form-data");
//const recursive = require("recursive-fs");
//const basePathConverter = require("base-path-converter");

export const pinDirectoryToIPFS = (files) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const src = "./exampleDirectory";


  //we gather the files from a local directory in this example, but a valid readStream is all that's needed for each file in the directory.

  let data = new FormData();

  for (let i = 0; i < files.length; i++) {
    data.append(`file`, files[i]);
  }

  const metadata = JSON.stringify({
    name: "testname",
    keyvalues: {
      exampleKey: "exampleValue",
    },
  });
  data.append("pinataMetadata", metadata);

  return axios
    .post(url, data, {
      maxBodyLength: "Infinity", //this is needed to prevent axios from erroring out with large directories
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: "dba4ce6fa4cc5cd13ff4",
        pinata_secret_api_key:
          "fcf42e2a8845462fab0b4cd10b333bf2589cdd6644caff80a4a915b331cda675",
      },
    })
    .then(function (response) {
      //handle response here

      return response;
    })
    .catch(function (error) {
      //handle error here
      console.log(error.response.data);
      return error.response.data
    });
};
