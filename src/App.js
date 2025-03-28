import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setformData] = useState({
    fName : "",
    lName : "",
    email : "",
    country : "--Select--",
    address : "",
    city : "",
    state : "",
    code : "",
    comments : false,
    candidates : false,
    offers : false,
    notifications : ""
  })

  function changeHandler(event) {
    const{name, value, checked, type} = event.target;

    setformData( (prevState) => ({
      ...prevState,  
      [name] : type === 'checkbox' ? checked : value
    }))
  }

  function submitHandler(event) {
    event.preventDefault()
    console.log("printing Form Data : ")
    console.log(formData)
  }

  return ( 
    <div className="bg-[#131F24] p-5">
      
    <div className="flex flex-col p-5   w-1/2 mx-auto rounded-md bg-[#05C706]">
      <img src="images.jpeg" className="h-[200px] w-[200px] mx-auto"></img>
      <form onSubmit={submitHandler}>
        <label htmlFor="fName" className="font-bold">First Name </label>
        <br/>
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder="Saksham"
          value={formData.fName}
          onChange={changeHandler}
          className="w-full border rounded-md mb-4 p-2"
          ></input>
        <br/>
        <label htmlFor="lName" className="font-bold">Last Name </label>
        <br/>
        <input
          type="text"
          name="lName"
          id="lName"
          placeholder="Mahajan"
          value={formData.lName}
          onChange={changeHandler}
          className="w-full border rounded-md mb-4 p-2"
          ></input>
        <br/>
        <label htmlFor="email" className="font-bold">Email Address </label>
        <br/>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="w-full border rounded-md mb-4 p-2"
          ></input>
        <br/>
        <label htmlFor="country" className="font-bold">Country </label>
        <br/>
        <select       
         id="country" 
         name="country" 
         value={formData.country}
         onChange={changeHandler}
         className="w-full border rounded-md mb-4 p-2"
        >
          <option>--Select--</option>
          <option>India</option>
          <option>Sweden</option>
          <option>Mexico</option>
          <option>France</option>
        </select>
        <br/>
        <label htmlFor="address" className="font-bold">Street Address </label>
        <br/>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="1234 Main St"
          value={formData.address}
          onChange={changeHandler}
          className="w-full border rounded-md mb-4 p-2"
          ></input>
        <br/>
        <label htmlFor="city" className="font-bold">City </label>
        <br/>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Ahmedabad"
          value={formData.city}
          onChange={changeHandler}
          className="w-full border rounded-md mb-4 p-2"
          ></input>
        <br/>
        <label htmlFor="state" className="font-bold">State </label>
        <br/>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Gujarat"
          value={formData.state}
          onChange={changeHandler}
          className="w-full border rounded-md mb-4 p-2"
          ></input>
        <br/>
        <label htmlFor="code" className="font-bold">Postal Code </label>
        <br/>
        <input
          type="text"
          name="code"
          id="code"
          placeholder="380005"
          value={formData.code}
          onChange={changeHandler}
          className="w-full border rounded-md mb-4 p-2"
          ></input>
        <br/>
        <fieldset className="mb-4">
          <legend className="font-bold">By Email </legend>
          
          <div className="flex flex-row gap-5 mb-3 mt-3">
           <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={formData.comments}
            onChange={changeHandler}
           />

           <div>
             <label htmlFor="comments" className="font-semibold">Comments</label>
             <p>Get notified when someone posts about a job opening</p>
           </div>

          </div>

          <div className="flex flex-row gap-5 mb-3">
           <input
            id="candidates"
            name="candidates"
            type="checkbox"
            checked={formData.candidates}
            onChange={changeHandler}
           />

           <div>
             <label htmlFor="candidates" className="font-semibold">Candidates</label>
             <p>Get notified when a candidate applies for a job</p>
           </div>

          </div>

          <div className="flex flex-row gap-5">
           <input
            id="offers"
            name="offers"
            type="checkbox"
            checked={formData.offers}
            onChange={changeHandler}
           />

           <div>
             <label htmlFor="offers" className="font-semibold">Offers</label>
             <p>Get notified when a candidate accepts or reject a job</p>
           </div>
          </div>
        </fieldset>




        <fieldset>
          <legend className="font-bold mb-1">Push Notifications</legend>
          <p className="font-semibold mb-2">These are all delivered via SMS to your mobile phone</p>

          <div className="flex flex-row gap-5 mb-[-15px]">
            <input 
              type="radio"
              id="pushEverything"
              name="notifications"
              value="Everything"
              onChange={changeHandler}


            ></input>

            <label htmlFor="pushEverything">Everything</label>
          </div>
          

          <br/>

          <div className="flex flex-row gap-5 mb-[-15px]">
            <input 
              type="radio"
              id="pushEmail"
              name="notifications"
              value="Sama]e as Email"
              onChange={changeHandler}

            ></input>
            <label htmlFor="pushEmail">Same as Email</label>

          </div>
          
          
          <br/>
          

          <div className="flex flex-row gap-5">
            <input 
              type="radio"
              id="pushNothing"
              name="notifications"
              value="No Push Notifications"
              onChange={changeHandler}

            ></input>
            <label htmlFor="pushNothing">No Push Notifications</label>
          </div>
          
        </fieldset>


        <button 
          type="submit"
          className="bg-[#1CB0F6] text-white font-bold rounded py-2 px-7 mt-5 mx-auto block"
        >Save</button>
      </form>
    </div>
    </div>
    
  );
}

export default App;
