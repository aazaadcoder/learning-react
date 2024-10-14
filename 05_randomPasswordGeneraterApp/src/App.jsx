import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("95976987687");

  const PasswordGenerater = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) string += "0123456789";
    if (characterAllowed) string += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    for (let i = 0; i < length; i++) {
      pass += string[Math.floor(Math.random() * string.length)];
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]); // as sab bhi dependenicies mai se koi bhi change hoga to ye function phir se run hoga har baar concept of memoization

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerater();
  }, [length, numberAllowed, characterAllowed, PasswordGenerater]);

  const passwordRef = useRef(null);

  return (
    <>
      <h1 className="text-4xl text-center" onClick={PasswordGenerater}>
        Password Generater
      </h1>

      {/* <h2 className='text-center'>Password: {password}</h2> */}
      <div className="mx-auto max-w-xl my-12">
        <text>Length : {length}</text>
        <input
          className="flex justify-center"
          type="range"
          min="6"
          max="100"
          value={length}
          id="lengthSlider"
          onChange={() => {
            setLength(document.getElementById("lengthSlider").value);
          }}
        ></input>
        <>Number : </>
        <input
          type="checkbox"
          onChange={() => {
            setNumberAllowed(!numberAllowed);
          }}
        />
        <div>
          <>Symbols : </>
          <input
            type="checkbox"
            onChange={() => {
              setCharacterAllowed(!characterAllowed);
            }}
          ></input>
        </div>
      </div>

      <div className=" w-full mx-auto max-w-5xl">
        <input
        type="text"
          ref={passwordRef}
          readOnly
          value={password}
          className="w-full max-w-5xl mx-auto bg-gray-400 px-4 my-8 rounded-lg shadow-md"
        ></input>
        <button
          onClick={copyPasswordToClipboard}
          className="bg-green-300 rounded-md p-1 h-7"
        >
          Copy
        </button>
      </div>
    </>
  );
}

export default App;

// const generateRandomChar = ()=>{
//   let randomNumber = Math.floor(33 + Math.random()*(127-33))
//   let randomCharValue = String.fromCharCode(randomNumber)
//   return randomCharValue
// }
// const PasswordGenerater = ( length = 8 )=>{
//   let Password = ""

//   for(let i= 0 ; i < length ; i++)
//     {
//       let randomCharValue =  generateRandomChar()
//       // if(!numberAllowed && !characterAllowed && !Number.NaN(randomCharValue) && (typeof randomCharValue === 'symbol')){
//       //   while(!Number.NaN(randomCharValue) && (typeof randomCharValue === 'symbol')){
//       //     randomCharValue = generateRandomChar()
//       //   }

//       // }
//       // else if(!numberAllowed && !Number.NaN(randomCharValue)){
//       //   while(!Number.NaN(randomCharValue)){
//       //      randomCharValue = generateRandomChar()
//       //   }
//       // }
//       // else if(!numberAllowed && (typeof randomCharValue === 'symbol')){
//       //   while((typeof randomCharValue === 'symbol')){
//       //      randomCharValue = generateRandomChar()
//       //   }
//       // }
//       console.log("randomCharValue: ", randomCharValue)
//       Password = Password + randomCharValue;

//     }

//     setPassword(Password)

// }
