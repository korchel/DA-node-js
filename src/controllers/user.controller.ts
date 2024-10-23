// import { db } from "../db.js";

// class UserController {
//   async createUser(req, res) {
//     const { name, lastname } = req.body;
//     const newUser = await db.query(
//       "INSERT INTO users (name, lastname) values ($1, $2) RETURNING *",
//       [name, lastname]
//     );
//     res.json(newUser);
//   }

//   async getUsers(req, res) {}

//   async getOneUser(req, res) {}

//   async updateUser(req, res) {}

//   async deleteUser(req, res) {}
// }

// export default new UserController();
