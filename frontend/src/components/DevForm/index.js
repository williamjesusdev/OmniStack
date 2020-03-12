import React, { useEffect, useState } from "react";

import "./styles.css";

function DevForm({ dev, onEdit, editMode, onSubmit, onCancel }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [techs, setTechs] = useState("");
  const [github_username, setGithubUsername] = useState("");

  useEffect(() => {
    if (onEdit) {
      setName(dev.name);
      setGithubUsername(dev.github_username);
      setBio(dev.bio);
      setTechs(dev.techs.join(", "));
      setLatitude(dev.location.coordinates[1].toFixed(7));
      setLongitude(dev.location.coordinates[0].toFixed(7));
    } else {
      if (dev === "") {
        getCoords();
      }
    }
  }, [onEdit, dev]);

  async function getCoords(e) {
    e === undefined ? (e = "") : e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude.toFixed(7));
        setLongitude(longitude.toFixed(7));
      },
      err => {
        console.log(err);
      },
      { timeout: 10000 }
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({ github_username, techs, latitude, longitude }).then(() => {
      setGithubUsername("");
      setTechs("");
    });
  }

  async function handleUpdate(e) {
    e.preventDefault();

    await editMode({
      name,
      github_username,
      bio,
      techs,
      latitude,
      longitude
    }).then(() => {
      setName("");
      setGithubUsername("");
      setBio("");
      setTechs("");
    });
  }

  async function handleCancel(e) {
    e.preventDefault();
    setName("");
    setGithubUsername("");
    setBio("");
    setTechs("");

    getCoords();
    onCancel();
  }

  return (
    <form onSubmit={onEdit ? handleUpdate : handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          name="github_username"
          id="github_username"
          disabled={onEdit}
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          required
        />
      </div>

      <div className="input-block" hidden={!onEdit}>
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="input-block" hidden={!onEdit}>
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          id="bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            required
          />
        </div>
      </div>
      <button className={onEdit ? "onEdit" : ""} type="submit">
        Salvar
      </button>
      <button
        className={onEdit ? "onEdit" : ""}
        hidden={!onEdit}
        onClick={handleCancel}
      >
        Cancelar
      </button>
      <button hidden={!onEdit} onClick={getCoords}>
        Pegar Localização
      </button>
    </form>
  );
}

export default DevForm;
