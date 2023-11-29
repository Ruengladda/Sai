import "./app.css"

function App() {
  let name = "RUENGLADDA"
  let age = 21 
  let mySalary = 40000
  let myWitfeSalary = 5000
  let style={
    color: "green",
    textAlign: "right",
    marginBottom: "30",
    fontSize: 24
  }
  let mystyle ={
    color: "teal",
    fontSize: 30,
    border: "2px solid #61dafb",
    borderRadius: 10,
    padding: 10,
    textAlign: "left"
  }
  return (
    <>
    <div className="red-text">Sawasdee {name}</div>
    <div className="red-text">I'm SAI {age}</div>
    <div style={style}>My wife's income : {mySalary + myWitfeSalary}</div>
    <p style={mystyle}> 
      เธอมีบัญชีอะไรฉันจะโอน <br />
      ถึงหน้าตาของฉันเหมือนกันโจร <br />
      เบอร์เธอเบอร์อะไรฉันจะโอน <br />
      อย่าทำให้ฉันเหงา เหงา Alone
    </p>
    </>
   
  )
}

export default App