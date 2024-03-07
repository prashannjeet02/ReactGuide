import React, { useState } from "react";

export const ReactForms = () => {
  const [user, setUser] = useState({
    userName: "",
    Age: 0,
    City: "",
    Mobile: 0,
  });
  function handleUserName(e) {
    setUser({
      userName: e.target.value,
      Age: user.Age,
      City: user.City,
      Mobile: user.Mobile,
    });
  }
  function handleAgeChange(e) {
    setUser({
      userName: user.userName,
      Age: e.target.value,
      City: user.City,
      Mobile: user.Mobile,
    });
  }
  function handleSubmit() {
    alert(JSON.stringify(user));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container-fluid">
          <dl>
            <dt>UserName</dt>
            <dd>
              <input type="text" onChange={handleUserName} name="userName" />
            </dd>
            <dt>Age</dt>
            <dd>
              <input type="number" name="Age" onChange={handleAgeChange} />
            </dd>
            <dt>City</dt>
            <dd>
              <select>
                <option value="-1">Select City</option>
                <option value="jabalpur">Jabalpur</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="surat">Surat</option>
              </select>
            </dd>
            <dt>Mobile</dt>
            <dd>
              <input type="number" name="Mobile" />
            </dd>
          </dl>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};
