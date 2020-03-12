import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import socketio from "socket.io-client";
import baseUrl from "../../config/envs";
import api from "../../services/api";
import { logout } from "../../services/auth";

import "./styles.css";

export default function Dashboard({ history }) {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);
  const user_id = localStorage.getItem("AirCnC_userId");
  const socket = useMemo(() => socketio(`${baseUrl}`, { query: { user_id } }), [
    user_id
  ]);

  useEffect(() => {
    socket.on("booking_request", data => {
      setRequests([...requests, data]);
    });
  }, [requests, socket]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("AirCnC_userId");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });
      setSpots(response.data);
    }
    async function loadBookings() {
      const user_id = localStorage.getItem("AirCnC_userId");
      const response = await api.get("/bookings", {
        headers: { user_id }
      });
      setRequests(response.data);
    }
    loadSpots();
    loadBookings();
  }, []);

  async function handleGoBack(id) {
    logout();
    history.push("/");
  }

  async function handleAccept(id) {
    await api.post(`/bookings/${id}/approvals`);

    setRequests(requests.filter(request => request._id !== id));
  }

  async function handleReject(id) {
    await api.post(`/bookings/${id}/rejections`);

    setRequests(requests.filter(request => request._id !== id));
  }

  return (
    <>
      <ul className="notifications">
        {requests.map(request => (
          <li key={request._id}>
            <p>
              <strong>{request.user.email}</strong> está solicitando uma reserva
              em <strong>{request.spot.company}</strong> para a data:
              <strong> {request.date}</strong>
            </p>
            <button
              className="accept"
              onClick={() => handleAccept(request._id)}
            >
              ACEITAR
            </button>
            <button
              className="reject"
              onClick={() => handleReject(request._id)}
            >
              REJEITAR
            </button>
          </li>
        ))}
      </ul>
      {spots.length > 0 ? (
        <ul className="spot-list">
          {spots.map(spot => (
            <li key={spot._id}>
              <header
                style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
              />
              <strong>{spot.company}</strong>
              {spot.techs.map(tech => " | " + tech)}
              <span>{spot.price ? `R$ ${spot.price} /dia` : `GRATUITO`}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>
          <strong>Você ainda não tem nenhum Spot</strong>
        </p>
      )}
      <div>
        <Link to="/new">
          <button className="btn" style={{ width: "48%", margin: "1%" }}>
            Cadastrar novo Spot
          </button>
        </Link>

        <button
          className="btn"
          style={{ width: "48%", margin: "1%" }}
          onClick={handleGoBack}
        >
          Voltar
        </button>
      </div>
    </>
  );
}
