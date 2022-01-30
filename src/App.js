import {useState} from 'react';

function App() {

  const [Input,SetInput] = useState('');

  const showMe = (result) =>{
    const StatusBar = document.querySelector('.status-bar');
    StatusBar.innerHTML = `
      <h2>Status :</h2>
      <h3>${result} !!!</h3>
    `
    StatusBar.classList.add("changedisplay");
    setTimeout(()=>{
      StatusBar.classList.remove("changedisplay");
    },1000)
  }

  const OutputWindow = document.querySelector('.output-window');
  const InputField = document.getElementById('input');
  const copybtn = document.querySelector('.copy');

  const getData = (e) =>{
    SetInput(e.target.value);
  } 

  function copyToClipboard(text) {
   const elem = document.createElement('textarea');
   elem.value = text;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
}

  function copyText(){
    const copiedtextContainer = document.getElementById('result');
    let copiedtext = copiedtextContainer.textContent || copiedtextContainer.innerText || copiedtextContainer.innerHTML;
    if(copiedtext === ' ' || copiedtext === ''){
      alert('There is nothing to copy !!!')
    }else{
      copyToClipboard(copiedtext);
      showMe('text copied successfully !!!');
    }
  }

  const ConvertToLowercase = () =>{
    if(Input === '' || Input === ' '){
      alert('No text found!!!')
    }else{
      OutputWindow.innerHTML = `
      <h3>Your Converted Lowercase output :</h3>
      <p className="result" id="result">${Input.toLowerCase()}</p>
      `
      copybtn.style.display="block";
      showMe('your text converted successfully !!!')
      InputField.value = '';    
      SetInput('');
    }
  }

  const ConvertToUppercase = () =>{
    if(Input === '' || Input === ' '){
      alert('No text found!!!');
    }else{
      OutputWindow.innerHTML = `
      <h3>Your Converted Uppercase output :</h3>
      <p className="result" id="result">${Input.toUpperCase()}</p>
      `
            copybtn.style.display="block";

      showMe('your text converted successfully !!!')
      InputField.value = '';   
      SetInput('');
 
    }
  }

  const RemoveExtraSpaces = () =>{
    if(Input === '' || Input === ' '){
      alert('No text found !!!')
    }else{
      OutputWindow.innerHTML = `
      <h3>Your Converted Output With Zero Extra Spaces :</h3>
      <p className="result" id="result">${Input.trim()}</p>
      `
            copybtn.style.display="block";

      showMe('your text converted successfully !!!')
      InputField.value = '';
      SetInput('');
 
    } 
  }

  const CountWord = () =>{
    if(Input === '' || Input === ' '){
      alert('No text found !!!');
    }else{
      let cnt=0;
      for (let i = 0; i < Input.length; i++) {
        if(Input[i] === ' '){
          cnt++;
        }      
      }

      OutputWindow.innerHTML = `
      <h3>Your Converted Lowercase output :</h3>
      <p className="result" id="result">${cnt + 1}</p>
      `
            copybtn.style.display="block";

      showMe('your word counted successfully !!!')
      InputField.value = ''; 
      SetInput('');
 
    }
  }

  const CountAlphabet = () =>{
    if(Input === '' || Input === ' '){
      alert('No text found !!!');
    }else{
      OutputWindow.innerHTML = `
      <h3>Your Converted Lowercase output :</h3>
      <p className="result" id="result">${Input.length}</p>
      `
            copybtn.style.display="block";

      showMe('your alphabet counted successfully !!!')
      InputField.value = '';  
      SetInput('');

    }  
  }


  return (
    <>
      <div className="App">
      <div className="status-bar">
      </div>
        <div className="container">
          <h1>TextAvails :- Text Transform, Word Count, Alphabet Count, Remove extra spaces, etc.</h1>
          <textarea name="input" id="input" cols="165" rows="8" placeholder="Enter Your text here.." onChange={getData}></textarea>
        </div>
        <div className="btns">
          <button className="btn" onClick={ConvertToLowercase}>convert to lowercase</button>
          <button className="btn" onClick={ConvertToUppercase}>convert to uppercase</button>
          <button className="btn" onClick={RemoveExtraSpaces}>remove extra spaces</button>
          <button className="btn" onClick={CountWord}>word count</button>
          <button className="btn" onClick={CountAlphabet}>alphabet count</button>
        </div>
        <div className="output-window">
        </div>
        <button class="btn copy" onClick={copyText}><img src="https://cdn-icons.flaticon.com/png/128/381/premium/381763.png?token=exp=1643564747~hmac=8eed9e73ed8eab5763436b0208eefe3e" alt="" /></button>
      </div>
    </>
  );
}

export default App;
