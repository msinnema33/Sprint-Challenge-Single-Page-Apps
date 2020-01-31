import React from "react";
import AppRoutes from './AppRoutes';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div className = 'main-nav'>
          <div className = 'flex-nav'>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div className = 'routes'>
          <AppRoutes />
          </div>
          </div>
        </div>
      </header>
    </section>
  );
}
