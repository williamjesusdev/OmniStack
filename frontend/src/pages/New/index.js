import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import camera from "../../assets/camera.svg";
import "./styles.css";

export default function New({ history }) {
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [techs, setTechs] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const user_id = localStorage.getItem("AirCnC_userId");
    const data = new FormData();

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id }
    });
    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        className={thumbnail ? "has-thumbnail" : ""}
        style={{ backgroundImage: `url(${preview})` }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select Img" />
      </label>
      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />
      <label htmlFor="techs">
        TECNOLOGIAS * <span>(separadas por virgula)</span>
      </label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />
      <label htmlFor="price">
        VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span>
      </label>
      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <div>
        <button
          className="btn"
          type="submit"
          style={{ width: "48%", margin: "1%" }}
        >
          Cadastrar
        </button>
        <Link to="/dashboard">
          <button className="btn" style={{ width: "48%", margin: "1%" }}>
            Voltar
          </button>
        </Link>
      </div>
    </form>
  );
}
