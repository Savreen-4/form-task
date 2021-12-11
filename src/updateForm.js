import { useState } from 'react';
import useUpdateForm from "./useUpdateForm";
export default function Loginpage() {

  const [formData, changeField] = useUpdateForm({ Name: '', Age: '' });


  return (
    <div className="container" style={{ maxWidth: "480px" }}>
      <div className="card shadow mt-5">
        <div className="card-body">
          <form className="form-horizontal" onSubmit={checkLogin}>
            <fieldset>
              <legend>Login Form</legend>
              <div className="form-group">
                <label className="control-label" htmlFor="textinput">Name</label>
                <div className="">
                  <input id="Name" onChange={changeField} name="Name" type="text" placeholder="Enter your name"  required="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="passwordinput">Age</label>
                <div className="">
                  <input id="Age" onChange={changeField} name="Age" type="password" placeholder="Enter your Age" className="form-control input-md" required="" />

                </div>
              </div>
              <button type="submit" className="btn btn-info btn-block" disabled={!formData.email || !formData.password}>Submit</button>
            </fieldset>
          </form>

        </div>
      </div>
    </div>
  )
}