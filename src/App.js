import React from 'react';
import './App.css';
import qrCode from './images/image-qr-code.png';

const App = () => {
  return (
    <main id="main-content">
      <div className="card-container">
        <div className="qr-img-container">
          <img src={qrCode} alt="qr scan code" />
        </div>
        <section>
          <div className="qr-info-content">
            <h1>
              Improve your front-end skills by building projects
            </h1>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App;