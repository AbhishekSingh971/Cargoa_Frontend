import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export default  function useCategory(){
    const navigate = useNavigate();
    const [auth] = useAuth();
    const [datas, setDatas] = useState([]);
  
    const order = async () => {
      try {
        const res = await axios.get(
          "http://localhost:7000/api/v1/manufacturer/getorder"
        );
        if (res && res.data.success) {
          let parse = res.data.order;
          setDatas(parse);
          console.log(parse)
        }
      } catch (error) {
        console.log(error);
      }
    };
    

    useEffect(()=>{
        if (!auth.user) {
            navigate("/login");
          }
        order();
    }, []);

    return datas;
}