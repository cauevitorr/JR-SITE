import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import Profile from './Profile/Profile'
import Button from './Button/Button'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Profile/>
    <Button/>
  </React.StrictMode>,
)
