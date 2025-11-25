import MongoDB from "mongodb";
import { getUsers } from "../db/database.mjs";
const ObjectID = MongoDB.ObjectId;

export async function getAll() {
  return auth;
}

export async function getAllByUserid(userid) {
  return auth.filter((auth) => auth.userid === userid);
}

// 회원가입
export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((result) => result.insertedId.toString());
}

// 로그인
export async function login(userid, password) {
  const user = users.find(
    (user) => user.userid === userid && user.password === password
  );
  return user;
}

// 로그인 유지
export async function findByUserid(userid) {
  return getUsers().find({ userid }).next().then(mapOptionalUser);
}

export async function findById(id) {
  return getUsers()
    .find({ _id: new ObjectID(id) })
    .next()
    .then(mapOptionalUser);
}

function mapOptionalUser(user) {
  return user ? { ...user, id: user._id.toString() } : user;
}
