import React, { useState, useEffect } from "react";
import Drawer from "../components/Drawer";
import axios from "axios";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
type Props = {
  _id: string;
  name: string;
  email: string;
  password: string;
  belongs_to: string;
  role: string;
};

interface postData {
  title: string;
  description: string;
  status: string;
  priority: string;
  created_by: string;
  assigned_to: string;
  deadline: Date;
}
function Form(this: any) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("Low");
  const [enteredStatus, setEnteredStatus] = useState("Open");
  const [enteredCreatedy, setEnteredCreatedy] = useState("");
  const [enteredAssignedTo, setEnteredAssignedTo] = useState("");
  const [enteredDeadline, setEnteredDeadline] = useState(new Date());
  const [user, setUsers] = useState<Props[]>([]);
  const [isValid, setIsValid] = useState(true);
  const [isValidDesc, setIsValidDesc] = useState(true);

  const titleChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (event.target.value.length > 0) {
      setIsValidDesc(true);
    }
    setEnteredDescription(event.target.value);
  };

  const priorityChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnteredPriority(event.target.value);
  };

  const statusChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnteredStatus(event.target.value);
  };

  const createdbyChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnteredCreatedy(event.target.value);
  };
  const asignedtoChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnteredAssignedTo(event.target.value);
  };
  const deadlineChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    let curDate = new Date("2023-04-03");
    setEnteredDeadline(curDate);
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let var1 = {
      title: enteredTitle,
      description: enteredDescription,
      status: enteredStatus,
      priority: enteredPriority,
      created_by: enteredCreatedy,
      assigned_to: enteredAssignedTo,
      deadline: enteredDeadline,
    };
    if (enteredTitle.trim().length === 0) {
      setIsValid(false);
      return;
    }
    if (enteredDescription.trim().length === 0) {
      setIsValidDesc(false);
      return;
    }
    sendPostRequest(var1);
    setEnteredTitle("");
    setEnteredDescription("");
  };
  const sendGetRequest = async () => {
    try {
      const response = await axios.get("http://localhost:8090/sagar/AllMember");
      //setTodo(response.data);
      console.log(response.data);
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const sendPostRequest = async (var1: postData) => {
    try {
      console.log("inside send post request +");
      const response = await axios.post(
        "http://localhost:8090/sagar/bug/",
        var1,
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);
  console.log("users are" + user);
  return (
    <div className="page-main">
      <Drawer />
      <div className="page-body">
        <b>ENTER A NEW BUG</b>

        <form className="form" onSubmit={submitHandler}>
          <div>
            <div>
              <label style={{ color: !isValid ? "red" : "black" }}>Title</label>
              <input
                style={{
                  borderColor: !isValid ? "red" : "black",
                  background: !isValid ? "salmon" : "transparent",
                }}
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div>
              <label style={{ color: !isValidDesc ? "red" : "black" }}>
                Description
              </label>
              <input
                style={{
                  borderColor: !isValidDesc ? "red" : "black",
                  background: !isValidDesc ? "salmon" : "transparent",
                }}
                type="text"
                value={enteredDescription}
                onChange={descriptionChangeHandler}
              />
            </div>
            <div>
              <label>Priority</label>
              <br></br>
              <br></br>
              <select className="form-select" onChange={priorityChangeHandler}>
                <option value="Low">LOW</option>
                <option value="Intermediate">INTERMEDIATE</option>
                <option value="High">HIGH</option>
                <option value="Critical">CRITICAL</option>
              </select>
            </div>
            <div>
              <label>Status</label>
              <br></br>
              <br></br>
              <select className="form-select" onChange={statusChangeHandler}>
                <option value="Open">OPEN</option>
                <option value="Closed">CLOSED</option>
                <option value="Working">WORKING</option>
              </select>
            </div>
            <br></br>
            <div>
              <label>Created By:</label>
              <br></br>
              <br></br>
              <select className="form-select" onChange={createdbyChangeHandler}>
                {user.map((opts) => (
                  <option value={opts._id}>{opts.name}</option>
                ))}
              </select>
            </div>
            <br></br>
            <div>
              <label>Assigned To:</label>
              <br></br>
              <br></br>
              <select className="form-select" onChange={asignedtoChangeHandler}>
                {user.map((opts) => (
                  //<option>{opts}</option>
                  <option value={opts._id}>{opts.name}</option>
                  //<option value={opts.key}>{opts.value}</option>
                ))}
              </select>
            </div>
            <br></br>
            <div>
              <label>Deadline</label>
              <input type="date" onChange={deadlineChangeHandler} />
            </div>
            <div className="form-button">
              <button type="submit">Add Bug</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
