import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/note';
import Input from './components/input';
import { useState } from 'react';

function App() {
  var [notes,setNotes] = useState([]);
  function getNotes(note){
    setNotes(prevNotes => {
      return [...prevNotes, note]
    });
  }
  function delItem(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }
  return (
    <div>
      <Header />
      <Input get={getNotes}/>
      {notes.map((noteItem, index) => <Note key={index} id={index} del={delItem} title={noteItem.title} content={noteItem.content}/>)}
      <Footer />
    </div>
  );
}

export default App;
