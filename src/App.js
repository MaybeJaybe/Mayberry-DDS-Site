// import './App.css';

// // color palette
// // #FFFFF2
// // #FADADD
// // #F9C7AE
// // #004444
// // #009E89

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="App-title">Paul Mayberry D.D.S.</h1>
//         <div className="Address" >
//           <p>501 W Joyner Ave. <small>Suite A</small></p>
//           <p>Ridgecrest, CA 93555</p>
//         </div>
//         <img className="Header-logo" src="./images/MayberryDDSLogo.png" />
//       </header>
//       <body className="App-body">
//         <div className="Schedule">
//           <h2>Schedule an appointment</h2>
//           <div className="Schedule-info">
//             <p><a href="tel:+17604462800">760-446-2800</a></p>
//             <p><a href="mailto:paul.mayberry@aol.com" target="_blank">paul.mayberry@aol.com</a></p>
//           </div>
          
//           {/* best dentures, extractions, list of services */}
//         </div>
//         <img className="Office-bg" src="./images/Day.jpg" />
//         {/* <img className="Office-bg" src="./images/Landing.jpg" /> */}
//         <div className="Info">
//           <div className="Owners">
//             <img src="./images/Owners.jpg" className="Owners-img" />
//           </div>
//           <div className="Hours">
//             <h2>Hours:</h2>
//             <p>Sunday - Closed</p>
//             <p>Monday - 8<small>AM</small> - 5<small>PM</small></p>
//             <p>Tuesday - 8<small>AM</small> - 5<small>PM</small></p>
//             <p>Wednesday - 8<small>AM</small> - 5<small>PM</small></p>
//             <p>Thursday - 8<small>AM</small> - 5<small>PM</small></p>
//             <p>Friday - Closed</p>
//             <p>Saturday - Closed</p>
//           </div>
//         </div>
//         <div className="Section">
//           <h2>Meet our team</h2>
//         </div>
//         <div className="Staff">
//           <div>
//             <img src="./images/Paul.jpg" className="Staff-img" />
//             <h3>Paul</h3>
//             <p>Dentist, Owner</p>
//           </div>
//           <div>
//             <img src="./images/Meadow.jpg" className="Staff-img" />
//             <h3>Meadow</h3>
//             <p>Dental Assistant</p>
//           </div>
//           <div>
//             <img src="./images/Sue.jpeg" className="Staff-img" />
//             <h3>Sue</h3>
//             <p>Hygienist</p>
//           </div>
//           <div>
//             <img src="./images/Ingrid.jpg" className="Staff-img" />
//             <h3>Ingrid</h3>
//             <p>Hygienist</p>
//           </div>
//           <div>
//             <img src="./images/Lisa.jpeg" className="Staff-img" />
//             <h3>Lisa</h3>
//             <p>Hygienist</p>
//           </div>
//           <div>
//             <img src="./images/Ana.jpeg" className="Staff-img" />
//             <h3>Ana</h3>
//             <p>Office Manager</p>
//           </div>
//           <div>
//             <img src="./images/Shyann.jpg" className="Staff-img" />
//             <h3>Shyann</h3>
//             <p>Receptionist</p>
//           </div>
//           <div>
//             <img src="./images/Anita.jpg" className="Staff-img" />
//             <h3>Anita</h3>
//             <p>Managing Partner</p>
//           </div>
//         </div>
//       </body>
//       <footer className="Footer">
//         <img src="./images/MayberryDDSLogo.png" className="Footer-logo" />
//         <h2>Be Good!</h2>
//       </footer>
//     </div>
//   );
// }

// export default App;





import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Paul Mayberry D.D.S.</h1>
        <div className="Address">
          <p>501 W Joyner Ave. <small>Suite A</small></p>
          <p>Ridgecrest, CA 93555</p>
        </div>
        <img className="Header-logo" src="./images/MayberryDDSLogo.png" alt="Mayberry DDS Logo" />
      </header>
      <div className="App-body">
        <div className="Schedule">
          <h2>Schedule an appointment</h2>
          <div className="Schedule-info">
            <p><a href="tel:+17604462800">760-446-2800</a></p>
            <p><a href="mailto:paul.mayberry@aol.com" target="_blank" rel="noopener noreferrer">paul.mayberry@aol.com</a></p>
          </div>
          
          {/* best dentures, extractions, list of services */}
        </div>
        <img className="Office-bg" src="./images/Day.jpg" alt="Office background" />
        {/* <img className="Office-bg" src="./images/Landing.jpg" alt="Landing background" /> */}
        <div className="Info">
          <div className="Owners">
            <img src="./images/Owners.jpg" className="Owners-img" alt="Owners" />
          </div>
          <div className="Hours">
            <h2>Hours:</h2>
            <p>Sunday - Closed</p>
            <p>Monday - 8<small>AM</small> - 5<small>PM</small></p>
            <p>Tuesday - 8<small>AM</small> - 5<small>PM</small></p>
            <p>Wednesday - 8<small>AM</small> - 5<small>PM</small></p>
            <p>Thursday - 8<small>AM</small> - 5<small>PM</small></p>
            <p>Friday - Closed</p>
            <p>Saturday - Closed</p>
          </div>
        </div>
        <div className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096875!2d144.95373631531716!3d-37.81627937975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727ab37e8a1e6!2s501%20W%20Joyner%20Ave%2C%20Ridgecrest%2C%20CA%2093555!5e0!3m2!1sen!2sus!4v1594012223893!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="Section">
          <h2>Meet our team</h2>
        </div>
        <div className="Staff">
          <div>
            <img src="./images/Paul.jpg" className="Staff-img" alt="Paul" />
            <h3>Paul</h3>
            <p>Dentist, Owner</p>
          </div>
          <div>
            <img src="./images/Meadow.jpg" className="Staff-img" alt="Meadow" />
            <h3>Meadow</h3>
            <p>Dental Assistant</p>
          </div>
          <div>
            <img src="./images/Sue.jpeg" className="Staff-img" alt="Sue" />
            <h3>Sue</h3>
            <p>Hygienist</p>
          </div>
          <div>
            <img src="./images/Ingrid.jpg" className="Staff-img" alt="Ingrid" />
            <h3>Ingrid</h3>
            <p>Hygienist</p>
          </div>
          <div>
            <img src="./images/Lisa.jpeg" className="Staff-img" alt="Lisa" />
            <h3>Lisa</h3>
            <p>Hygienist</p>
          </div>
          <div>
            <img src="./images/Ana.jpeg" className="Staff-img" alt="Ana" />
            <h3>Ana</h3>
            <p>Office Manager</p>
          </div>
          <div>
            <img src="./images/Shyann.jpg" className="Staff-img" alt="Shyann" />
            <h3>Shyann</h3>
            <p>Receptionist</p>
          </div>
          <div>
            <img src="./images/Anita.jpg" className="Staff-img" alt="Anita" />
            <h3>Anita</h3>
            <p>Managing Partner</p>
          </div>
        </div>
      </div>
      <footer className="Footer">
        <img src="./images/MayberryDDSLogo.png" className="Footer-logo" alt="Mayberry DDS Logo" />
        <h2>Be Good!</h2>
      </footer>
    </div>
  );
}

export default App;
