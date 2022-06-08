import React, { Component } from "react";
import "./App.css";
import Students from "./Students";
import Score from "./Score"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Students
            name="Cait Yomorta"
            bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum"
          />
          <Score date="Date = 2018-02-08" score="Score = 77" />
          <Score date="Date = 2018-04-22" score="Score = 77" />
          <Score date="Date = 2018-09-15" score="Score = 68" />
          <Students
            name="Holly Baird"
            bio="Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic."
          />
          <Score date="Date = 2018-12-14" score="Score = 88" />
          <Score date="Date = 2019-01-09" score="Score = 79" />
          <Score date="Date = 2019-02-23" score="Score = 91" />
          <Score date="Date = 2019-03-01" score="Score = 95" />
          <Students
            name="Wes Mungia"
            bio="Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?"
          />
          <Score date="Date = 2018-10-11" score="Score = 62" />
          <Score date="Date = 2018-11-24" score="Score = 74" />
          <Score date="Date = 2018-12-19" score="Score = 85" />
        </header>
      </div>
    );
  }
}

export default App;
