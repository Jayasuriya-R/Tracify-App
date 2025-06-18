import React, { useState,useRef } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { SplitButton } from 'primereact/splitbutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { addIssue } from "../utils/issueSlice";
import { useDispatch, useSelector } from "react-redux";

const AddIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [statusValue, setStatusValue] = useState(null);
  const [assignee, setAssignee] = useState("");
  const [priorityValue, setPriorityValue] = useState(null);
  const [date, setDate] = useState(null);
  const [issues, setIssues] = useState([]);
  const dispatch = useDispatch();
  const toast = useRef(null);
  
  const status = ["Open", "In Progress", "Closed"];
  const priority = ["Low", "Medium", "High","Critical"];

  const save = () => {
  if (!title || !description || !statusValue || !assignee || !priorityValue || !date) {
    toast.current.show({
      severity: 'warn',
      summary: 'Validation',
      detail: 'Please fill all fields',
    });
    return;
  }

  const newIssue = {
    id: issues.length + 1, // Optional: use uuid() for safer unique IDs
    title: title, // 🔧 Fixed typo from "titel"
    description: description,
    status: statusValue,
    assignee: assignee,
    priority: priorityValue,
    createdDate: date,
  };

  issues.length>0 && dispatch(addIssue(newIssue)); // ✅ dispatch only the new issue
  setIssues((prev) => [...prev, newIssue]); // Optional, only if you're using local state too

  // console.log("New Issue Added:", newIssue);
  // toast.current.show({
  //   severity: 'success',
  //   summary: 'Success',
  //   detail: 'Issue added',
  // });

  // Clear form
  setTitle("");
  setDescription("");
  setStatusValue(null);
  setAssignee("");
  setPriorityValue(null);
  setDate(null);
};


  return (
    <div className="flex  justify-center h-screen py-4 bg-gray-100">
    <form
      className="border-none z-20 shadow-lg w-1/2 flex justify-center rounded-lg p-4 bg-white"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col space-y-7 items-center h-full">
        <h1 className="text-4xl font-extrabold text-center tracking-tight">
          Describe your Issue
        </h1>

        <div>
          <FloatLabel>
            <InputText value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "25rem" }} />
            <label>Title</label>
          </FloatLabel>
        </div>

        <div>
          <FloatLabel>
            <InputText value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "25rem" }} />
            <label>Description</label>
          </FloatLabel>
        </div>

        <div>
          <FloatLabel>
            <Dropdown
              options={status}
              value={statusValue}
              onChange={(e) => setStatusValue(e.value)}
              className="w-full"
              style={{ width: "25rem" }}
            />
            <label>Select Status</label>
          </FloatLabel>
        </div>

        <div>
          <FloatLabel>
            <InputText value={assignee} onChange={(e) => setAssignee(e.target.value)} style={{ width: "25rem" }} />
            <label>Assignee</label>
          </FloatLabel>
        </div>

        <div>
          <FloatLabel>
            <Dropdown
              options={priority}
              value={priorityValue}
              onChange={(e) => setPriorityValue(e.value)}
              className="w-full"
              style={{ width: "25rem" }}
            />
            <label>Select Priority</label>
          </FloatLabel>
        </div>

        <div>
          <FloatLabel>
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              style={{ width: "25rem" }}
            />
            <label>Created Date</label>
          </FloatLabel>
        </div>

        <Toast ref={toast} />
        <Button label="Submit" icon="pi pi-check" onClick={save} size="small" />
        
      </div>
    </form>
    </div>
  );
};
export default AddIssue;
