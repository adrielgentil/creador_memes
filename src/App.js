import {useState} from 'react'
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [imagen, setImagen] = useState('')

  const onChangeLine1 = function(event) {
    setLinea1(event.target.value)
  }
  const onChangeLine2 = function(event) {
    setLinea2(event.target.value)
  }
  const onChangeImagen = function(event) {
    setImagen(event.target.value)
  }
  const onClickExport = function(event) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = "miMeme.png";
      link.href = img;
      link.click()
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fry" >Futurama</option>
        <option value="raptor">Filosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br></br>
      <input onChange={onChangeLine1} type='text'placeholder='Linea 1'/><br></br>
      <input onChange={onChangeLine2}type='text' placeholder='Linea 2'/><br></br>
      <button onClick={onClickExport} >Exportar</button>

      <div className="meme" id='meme'>
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        <img src={'/img/'+ imagen +'.jpeg'}/>
      </div>

    </div>
  );
}

export default App;
