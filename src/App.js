import "./styles.css";

const Strlength = (name) => {
  return name.length;
};

const lengthChar = (name) => console.log("Oh your name is ", name, " long");

lengthChar(Strlength("Ramkumar"));

// Thanos kill me
const willThanosKillMe = (name, successCb, failureCb) => {
  const length = name.length % 2 === 0;
  if (length) {
    successCb();
  } else {
    failureCb();
  }
};

const successCb = () => console.log("I'm alive");

const failureCb = () => console.log("I'm Death");

willThanosKillMe("Blaster", successCb, failureCb);

// Print after some delay
const printAfterDelay = (msg, delay) => {
  setTimeout(() => console.log(msg), delay);
};

printAfterDelay("Set timeout msg", 5000);

//Set interval msg after some time

// const msg = setInterval(() => console.log("Yay !! join me"), 1000)
// clearInterval(msg)
// // countdown bomb
// function bomb(counter){
//   const countdown = setInterval(() => {
//     console.log(counter)
//     counter --
//     if(counter === 0){
//       console.log("Bang Bang!!")
//       clearInterval(countdown)
//     }
//   },1000)
// }

// bomb(10)

//Create button and console innerText

function ButtonInnerText() {
  function clickText(e) {
    console.log(e.target.innerText);
  }
  return <button onClick={clickText}>You clicked me</button>;
}

//Click with array of objects
function ClickArrayObjects() {
  const ArrObj = [
    {
      id: 1,
      name: "Fan"
    },
    {
      id: 2,
      name: "Bed"
    },
    {
      id: 3,
      name: "BedSheet"
    }
  ];
  return (
    <ul>
      {ArrObj.map((item) => {
        return (
          <li key={item.id} onClick={() => console.log(item)}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

//Fake API success and Failure
function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}
function API() {
  return (
    <button
      onClick={() => {
        fakeFetch("Superman", true)
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      }}
    >
      Fetch Data
    </button>
  );
}

//Get server response length
function GetServerResponseLength() {
  return (
    <button
      onClick={() => {
        fakeFetch("Aabra ka dabra").then((data) =>
          console.log("Data length", data.length)
        );
      }}
    >
      ResponseLength
    </button>
  );
}

//SyncCallFromServer
function SyncCallFromServer(msg1, msg2) {
  fakeFetch(msg1).then((data1) =>
    fakeFetch(data1 + msg2).then((data2) => console.log(data2))
  );
}

//Asyn await fakeFetch

async function asyncAPI() {
  const data = await fakeFetch("Nothing");
  console.log({ data });
}

async function asyncSycnCallFromServer(msg1, msg2) {
  const data1 = await fakeFetch(msg1);
  const data2 = await fakeFetch(data1 + msg2);
  console.log({ data2 });
}

SyncCallFromServer("Chacha", "Chaudari");
asyncAPI();
asyncSycnCallFromServer("Chachi", "420");

export default function App() {
  return (
    <div className="App">
      <h1>Async Coding</h1>
      <ButtonInnerText />
      <ClickArrayObjects />
      <API />
      <GetServerResponseLength />
      {/* <SyncCallFromServer msg1 = "Virendra" msg2 = "Wadher"/> */}
    </div>
  );
}
