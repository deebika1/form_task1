import React from "react";

const App=()=> {
  const [first, setFirst] = React.useState([]);
  const [last, setLast] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [repassword, setRepassword] = React.useState([]);
 function display(){
   console.log(first,last,email,password,repassword);
//alert(first,last,email,password,repassword);
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          width: "630px",
          height: "800px",
          float: "left",
        }}
      >
        <label>enter your first name</label>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>enter your last name</label>
        <input
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>enter your email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>enter your password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>enter your repassword</label>
        <input
          type="text"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Matrial status</label>

        <form action="/action_page.php">
          <input type="radio" />
          <label value="single">Single</label>
          <br></br>
          <input type="radio" />
          <label value="married">Married</label>
          <br></br>
          <input type="radio" />
          <label value="cant say">Can't say</label>
        </form>
        <br></br>

        <form action="/action_page.php">
          <label> choose your food</label>
          <select name="foods" id="foods">
            <option value="Briyani">Briyani</option>
            <option value="Thandoori">Thandoori</option>
            <option value="Icecream">IceCream</option>
            <option value="Veg-rice">VegRice</option>
          </select>
          </form>
        <br></br>
        <form action="/action_page.php">
          <label> choose your country</label>
          <select name="country" id="country">
            <option value="India">India</option>
            <option value="America">America</option>
          </select>
           </form>
          <br></br>
         <button onClick={()=>display()}>submit</button>
        
      </div>
      <div
        style={{
          backgroundColor: "red",
          width: "719px",
          height: "800px",
          float: "right",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Email</th>
              <th>{last}</th>
            </tr>
          </thead>
          <tbody>
            {first.map((val, index) => (
              <tr key={index}>
                <td>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default App;
