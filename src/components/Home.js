import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  // UPDATE BTN
  function setID(id, name, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }

  // DELETE BTN
  function deleted(ID) {
    console.log(ID, array);
    var index = array.findIndex((x) => x.id === ID);
    array.splice(index, 1);
    history("/");
  }

  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item, ind) => {
            return (
              <tr key={ind}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>
                  <Link to={`/edit`}>
                    <Button
                      onClick={(e) => setID(item.id, item.Name, item.Age)}
                      variant="info"
                    >
                      Update
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button onClick={(e) => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link className="d-grid gap-2" to="/create">
        <Button variant="warning" size="lg">
          Create
        </Button>
      </Link>
    </div>
  );
}

export default Home;
