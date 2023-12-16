import Layout from '../../components/Layout'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from '../../redux/features/alertSlice';
import { useEffect, useState } from 'react';

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

   //getDOc Details
   const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/doctor/getDoctorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
    //eslint-disable-next-line
  }, []);

  console.log('getdoctor',doctor)

  return (
    <Layout>
    <h1>Manage  Profile</h1>
    </Layout>
  )
}

export default Profile