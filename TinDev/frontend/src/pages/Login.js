import React, { useState } from 'react'
import logo from '../assets/logo.svg'

import api from '../services/api'

import './Login.css'

export default function Login({ history }) {
  const [username, setUsername] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await api.post('/devs', { username })

    const { _id } = response.data
    localStorage.setItem('logged', _id)
    history.push(`/dashboard`)
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Logo TinDev" />
        <label htmlFor="username" />
        <input
          name="username"
          value={username}
          placeholder='Digite o seu usuário do github'
          onChange={e => setUsername(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
