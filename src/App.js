import React from "react";
import 'rsuite/dist/rsuite.min.css';
import './App.css';
import {Input, FlexboxGrid, Button} from "rsuite";
import axios from "axios";

function App() {
  const [repoName, setRepoName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleJobTrigger = () => {
      axios.post('http://localhost:8080/RepoCreation', {
          repositoryName: repoName,
          emaidId: email
      }).then( (res) => {
          if(res) {
              alert(res.body);
          }
          }).catch(function (err) {
              alert("Job trigger failed!");
              console.log(err);
          });
    console.log(repoName, email);
  }

  return (
    <div className="App">
        <Input
            className="job-input"
            placeholder={"Repository Name*"}
            onChange={(val) => {
                setRepoName(val)
            }}/>
        <Input
            className="job-input"
            placeholder={"Email Id*"}
            onChange={(val) => {
                setEmail(val)
            }}/>
        <Button
            className="job-button"
            onClick={() => {
                if(email && repoName) {
                    handleJobTrigger();
                } else  {
                    alert("Please enter the required params!")
                }
        }}>
            Submit
        </Button>
    </div>
  );
}

export default App;
