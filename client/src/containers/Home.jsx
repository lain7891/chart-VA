import React, { useState } from "react";
import axios from "axios";

const style = {
    button: {
        marginTop: "3rem"
    }
}

const Home = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handleFormSubmit = (e) => {
      e.preventDefault();
      axios.post("/api/children")
        .then((response) => {
            console.log(response.data);
            history.push("/admin");
          })
          .catch((err) => {
            console.log(err);
          });
        
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Behavior Chart</h1>
          </div>
          <form class="row g-3 needs-validation" onSubmit={handleFormSubmit}>
            <div className="col-md-4">
              <input
                placeholder="First Name"
                type="text"
                id="firstName"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={(e)=>{
                    setFirstName(e.target.value)
                }}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <input
                placeholder="Last Name"
                type="text"
                id="lastName"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={(e)=> {
                    setLastName(e.target.value)
                }}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={style.button}>
        <div className="row">
          <div className="col">
            <input class="btn btn-primary" type="submit" value="Submit"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
