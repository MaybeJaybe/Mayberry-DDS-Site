import './App.css';
import Header from './components/Header';
import Schedule from './components/Schedule';
import OfficeSection from './components/OfficeSection';
import StaffSection from './components/StaffSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Schedule />
        <OfficeSection />
        <StaffSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
