import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
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

  //get all doctor
  const getAllDoctorData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDoctorData();
  }, []);
  // console.log('getAllDoctors',doctors)
  return (
    <div>
    <Layout>
    <h1>HomePage</h1>
    <Row>
        {doctors && doctors.map((doctor,i) => <DoctorList key={i} doctor={doctor} />)}
      </Row>
    </Layout>
    
    </div>
  )
}

export default HomePage