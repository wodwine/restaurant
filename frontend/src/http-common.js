import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8000/api/v1/restaurants",
  baseURL: "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-xyiwi/endpoint/",
  headers: {
    "Content-type": "application/json"
  }
});