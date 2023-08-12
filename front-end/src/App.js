import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Note from './components/Expense/Expense';


function App() {
  return (
    <div>
      <Header />
      <Note title="Note Title" content="Note Content" />
      <Footer />
    </div>
  );
}

export default App;
