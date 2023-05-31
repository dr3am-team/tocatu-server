class UsersMem {
  constructor() {
    this.users = [
      {
        username: "kiss",
        mail: "kiss@kiss.kiss",
        password: "asd123",
        userType: "band",
        name: "kiss",
        style: "rock",
        id: "1",
      },
      {
        username: "acdc",
        mail: "acdc@acdc.acdc",
        password: "asd123",
        userType: "band",
        name: "acdc",
        style: "rock",
        id: "2",
      },
      {
        username: "bar",
        mail: "bar@bar.bar",
        password: "bar123",
        userType: "bar",
        name: "bar",
        address: "bar 3231",
        capacity: 23,
        id: "3",
      },
    ];
  }

  getNext_Id(users) {
    let lg = users.length;
    return lg ? parseInt(users[lg - 1].id) + 1 : 1;
  }
  getUsers = async () => {
    try {
      return this.users;
    } catch (err) {
      console.log("Error en getUsers", err);
      return [];
    }
  };
  addUser = async (user) => {
    try {
      let id = this.getNext_Id(this.users);
      user.id = id;
      this.users.push(user);
      return user;
    } catch (err) {
      console.log("Error adding user", err);
      let user = {};
      return user;
    }
  };
  editUser = async (user) => {
    //receives user with all data, to replace another user
    const { id } = user;
    const idxUserToEdit = this.users.findIndex((element) => element.id == id);
    console.log(idxUserToEdit);
    if (idxUserToEdit != -1) {
      this.users[idxUserToEdit] = user;
      return user;
    } else {
      console.log("error editing user");
      return {};
    }
  };
}

export default UsersMem;
