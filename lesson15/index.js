let getId = x => document.getElementById(x);

let users = [];

getId('add').onclick = function(){
    let login = getId('login').value;
    let password = getId('password').value;
    let emailAddress = getId('emailAddress').value;
    let user = new User(login,password,emailAddress);
    users.push(user);
    getId('formLeft').reset();
    refreshTable();
    
    console.log(user)
    console.log(users)
}

function User(l,p,e){
    this.login = l || 'login not found';
    this.password = p || 'password not found';
    this.emailAddress = e || 'email not found';
}

function refreshTable(){
  let k = '<tbody>'
  for(i = 0;i < users.length; i++){
    k+= '<tr>';
    k+= '<td>' + (i+1) + '</td>';
    k+= '<td>' + users[i].login + '</td>';
    k+= '<td>' + users[i].password + '</td>';
    k+= '<td>' + users[i].emailAddress + '</td>';
    k+= '<td>' + '<button style="background-color:yellow;border-radius: 5px;" onclick="editUser('+ i +')">edit</button>' + '</td>';
    k+= '<td>' + '<button style="background-color:red;border-radius: 5px;" onclick="deleteUser('+ i +')">delete</button>' + '</td>';
    k+= '</tr>';
  }
  k+='</tbody>';
  getId('tableData').innerHTML = k;
}

function editUser(index){
    let login = getId('login');
    let password = getId('password');
    let emailAddress = getId('emailAddress');
    login.value = users[index].login;
    users[index].password = users[index].password;
    emailAddress.value = users[index].emailAddress;
    let add = getId('add');
    let btnEdit = getId('edit');
    add.style.display = 'none';
    btnEdit.style.display = '';
    btnEdit.onclick = () => edit(index);
}

function edit(index){
    let login = getId('login');
    let password = getId('password');
    let emailAddress = getId('emailAddress');
    users[index].login = login.value;
    users[index].password = password.value;
    users[index].emailAddress = emailAddress.value;
    refreshTable();
    let btnEdit = getId('edit');
    let add = getId('add');
    btnEdit.style.display = 'none';
    add.style.display = '';
    getId('formLeft').reset();
}

function deleteUser(index){
  users.splice (index, 1);
  refreshTable();
}