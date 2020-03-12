import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

import api from "../services/api";

import "./Main.css";

export default function Main({ match }) {
  const [message, setMessage] = useState("Loading!");
  const [devs, setDevs] = useState([]);
  const logged = localStorage.getItem("logged");

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: { logged }
      });
      setDevs(response.data);
      setMessage("Acabou :(");
    }

    loadUsers();
  }, [logged]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { logged }
    });
    setDevs(devs.filter(dev => dev._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { logged }
    });
    setDevs(devs.filter(dev => dev._id !== id));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Logo TinDev" />
      </Link>
      {devs.length > 0 ? (
        <ul>
          {devs.map(dev => (
            <li key={dev._id}>
              <img src={dev.avatar_url} alt={`Avatar ${dev.name}`} />
              <footer>
                <strong>{dev.name}</strong>
                <p>{dev.bio}</p>
              </footer>
              <div className="buttons">
                <button type="button" onClick={() => handleDislike(dev._id)}>
                  <img src={dislike} alt="Dislike" />
                </button>
                <button type="button" onClick={() => handleLike(dev._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">{message}</div>
      )}
    </div>
  );
}
