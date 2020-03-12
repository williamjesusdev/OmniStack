import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function DevItem({ dev, onEdit, onDelete }) {
  const [longitude, latitude] = dev.location.coordinates;
  async function deleteDev() {
    onDelete(dev.github_username);
  }

  async function updateDev() {
    onEdit(dev.github_username);
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>
            {dev.name} <span>({dev.github_username})</span>
          </strong>
          <span>{dev.techs.join(", ")}</span>

          <a
            href={`https://www.google.com.br/maps/place/${latitude},${longitude}/@${latitude},${longitude},20z`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Place: {dev.location.coordinates.reverse().join(" | ")}</span>
          </a>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a
        href={`https://github.com/${dev.github_username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar perfil no GitHub
      </a>
      <button onClick={deleteDev} id={dev.github_username}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <button onClick={updateDev} id={dev.github_username}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
    </li>
  );
}

export default DevItem;
