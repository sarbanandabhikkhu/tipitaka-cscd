const initHtml = `
  <div id="input-layout">
    <h1>Input User</h1>
    <div class="enter-inputs">
      <div>
        <label>ID</label>
        <input id="enterID" type="text" />
      </div>
      <div>
        <label>Name</label>
        <input id="enterName" type="text" />
      </div>
      <div>
        <label>Age</label>
        <input id="enterAge" type="number" />
      </div>
    </div>
    <div class="enter-buttons">
      <button id="insert">INSERT</button>
      <button id="update">UPDATE</button>
      <button id="remove">REMOVE</button>
    </div>
  </div>
  <div id="find-layout">
    <h1>Find by ID</h1>
    <div>
      <label>ID</label>
      <input id="findID" type="text" />
    </div>
    <div>
      <button id="find">FIND</button>
    </div>
  </div>
  <div id="all-users-layout">
    <h1>All Users</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody id="allUsers">
        <tr>
          <td id="findId">ID</td>
          <td id="findName">Name</td>
          <td id="findAge">Age</td>
        </tr>
        <tr>
      </tbody>
    </table>
  </div>
`;

export default initHtml;
