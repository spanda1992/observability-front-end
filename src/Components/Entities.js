import React, { useState, useEffect, useCallback } from "react";
import "../Styles/entity.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import MainNavBar from "./MainNavBar";
import Card from 'react-bootstrap/Card';
import Protected from "./Protected";
import Sidebar from "./Sidebar";

const Entities = () => {
  const [entities, setEntites] = useState([]);
  const [error, setError] = useState("");

  const authState = useSelector((state) => {
    return state.auth;
  });

  const fetchEntity = useCallback(async () => {
    try {
      //
      const response = await axios({
        method: "get",
        url:
          process.env.REACT_APP_HOST_URL + process.env.REACT_APP_FETCH_ENTITIES,
        headers: {
          Authorization: "Bearer " + authState.token,
        },
      });
      const data = response.data;

      if (data.length > 0) {
        setEntites(data);
      }
    } catch (e) {
      setError(e.message);
      console.log(e.message)
    }
  }, []);

  useEffect(() => {
    fetchEntity();
  }, [fetchEntity]);

  return (
    <div>
    <Protected>
        <MainNavBar />
        
      <div className="d-flex gap-3">
      <Sidebar />
      <div className="row gap-2 m-3">
        {
          entities.map((eachEntity) => {
            return(
              <Card key={eachEntity._id} className='mb-3 p-3 col-2'>
              <Card.Title>{eachEntity.name}</Card.Title>
              <hr/>
              <Card.Text>
                { `Source :-  ${eachEntity.source}` }
                <br/>
                { `Assignment Group :- ${eachEntity.assignmentGroup}` }
                <br/>
                { `CMDB CI :- ${eachEntity.cmdbCI}` }
                <br/>
                { `Priority:- ${eachEntity.priority}` }
              </Card.Text>
            </Card>
            
            )
          })
        }
      </div>
      </div>
      </Protected> 
    </div>
  );
};

export default Entities;
