//TODO: Add Your Code Below
window.addEventListener("load", function () {
  fetch("astronauts.json")
    .then(function (response) {
      //   console.log(response.json());
      return response.json();
    })
    .then(function (json) {
      const container = document.getElementById("container");
      console.log(json);
      let astronautIndex = "";
      for (astronaut of json) {
        astronautIndex += `
        <div class="astronaut">
          <div class="bio"> 
            <h2>${astronaut.firstName} ${astronaut.lastName}</h2>
            <ul>
             <li>Hours in space: ${astronaut.hoursInSpace}</li>
             <li>Active: ${astronaut.active}</li>
             <li>Skills: ${astronaut.skills.join(", ")}</li> 
            </ul>
          </div>
          <img class="avatar" src="${astronaut.picture}"/>
          </div>
          `;
        // container.innerHTML = `id:${json[a].id}`;
      }
      container.innerHTML = astronautIndex;
    });
});
