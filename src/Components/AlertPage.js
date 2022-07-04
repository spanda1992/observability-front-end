import React, { useState, useEffect, useCallback } from "react";
import { NavLink , Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import MainNavBar from "./MainNavBar";
import Card from "react-bootstrap/Card";
import "../Styles/alerts.css";
import Protected from "./Protected";
import Sidebar from "./Sidebar";
import {BsFillCaretRightFill , BsFillCaretLeftFill , BsSearch , BsDownload} from 'react-icons/bs'
import { AiFillFilter } from 'react-icons/ai'
import {GoZap} from 'react-icons/go'

const AlertPage = () => {
  const [alerts, setAlerts] = useState([]);
  const [page , setPage] = useState(1)

  const authState = useSelector((state) => {
    return state.auth;
  });

  const fetchAlerts = useCallback(async (pageNum) => {
    try {
      const response = await axios({
        method: "get",
        url:
          process.env.REACT_APP_HOST_URL + process.env.REACT_APP_FETCH_ALERTS,
        headers: {
          Authorization: "Bearer " + authState.token,
        },
        params:{
          page : pageNum
        }
      });
      const alertData = response.data;

      console.log(alertData)

      if(alertData.length > 0){
      setAlerts(alertData);
      }else{
        setPage((page) => page - 1 )
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }, [page]);

  useEffect(() => {
    fetchAlerts(page);
  }, [fetchAlerts]);

  const getStatusClassName = (eachAlert) => {
    if (eachAlert.status === "PROCESSING") {
      return "mt-2 mb-3 text-danger";
    } else if (eachAlert.status === "MANUAL") {
      return "mt-2 mb-3 text-primary";
    } else if (eachAlert.status === "SUPPRESSED-DUPLICATE") {
      return "mt-2 mb-3 text-warning";
    }
  };

  const handleApplyFiletr = (e) => {
    e.preventDefault()
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const handlePreviousSearch = (e) => {
    e.preventDefault()
    if(page > 1){
    setPage((page) => page - 1 )
    fetchAlerts(page)
    }
  }

  const handleNextSearch = (e) => {
    e.preventDefault()
    setPage((page) => page + 1)
    fetchAlerts(page)
  }

  const handleRefresh = (e) => {
    e.preventDefault()
    setPage(1)
    fetchAlerts(page)
  }

  return (
    <div>
      <Protected>
        <MainNavBar />
        <div className="d-flex gap-2">
        <Sidebar />
        <div className="container mt-5">
          <div className="mr-auto mb-5">
            <form class="form-inline d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2">
                <button class="btn btn-outline-primary " onClick={handleRefresh} ><GoZap /></button>
                <button class="btn btn-outline-primary " onClick={handleApplyFiletr} ><AiFillFilter /></button>
                <Link to="/downloadable/background-image-1.png" className="btn btn-outline-primary" target="_blank" download><BsDownload /></Link>
              </div>
              <div className="d-flex gap-2">
                <input
                  type="text"
                  class="form-control d-inline-block mr-3"
                  placeholder="Search Alert"
                />
                <button class="btn btn-outline-success ml-5" onClick={handleSearch} ><BsSearch /></button>
                <button class="btn btn-outline-warning ml-5" onClick={handlePreviousSearch}><BsFillCaretLeftFill /></button>
                <button class="btn btn-outline-warning ml-5" onClick={handleNextSearch}><BsFillCaretRightFill /></button>
              </div>
            </form>
          </div>

          { alerts.map((eachAlert) => {
            return (
              <Card key={eachAlert.id} className="mb-3 p-3 card">
                <div className="d-flex justify-content-between">
                  <Card.Title>{`${eachAlert.faultName} Error Occured on ${eachAlert.entityName}`}</Card.Title>
                  {eachAlert.status === "MANUAL" && (
                    <Link
                      to="https://google.com"
                      className="btn btn-success"
                      target="_blank"
                    >
                      INCOO1234
                    </Link>
                  )}
                </div>
                <Card.Subtitle className={getStatusClassName(eachAlert)}>
                  {eachAlert.status}
                </Card.Subtitle>
                <hr />
                <Card.Text>
                  {`Severity :- ${eachAlert.severity}`}
                  <br />
                  {`Description :- ${eachAlert.description}`}
                  <br />
                  {`Create At :- ${eachAlert.createdAt}`}
                  <br />
                  {`Alert ID :- ${eachAlert.id}`}
                </Card.Text>
              </Card>
            );
          })}
        </div>
        </div>
      </Protected>
    </div>
  );
};

export default AlertPage;
