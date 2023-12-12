import axios from "axios";
import { useEffect } from "react";

const HomePage = () => {
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>HomePage</div>
  )
}

export default HomePage