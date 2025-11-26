import MongoDB from "mongodb";
import { useVirtualId } from "../db/database.mjs";
import mongoose from "mongoose";

// versionKey: Mongoose 가 문서를 저장할 때 자동으로 추가하는 _v라는 필드를 설정
const userSchema = new mongoose.Schema(
  {
    userid: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    url: String,
  },
  { versionKey: false }
);

useVirtualId(userSchema);
const User = mongoose.model("User", userSchema);

// 회원가입
export async function createUser(user) {
  return new User(user).save().then((data) => data.id);
}

// 로그인 유지
export async function findByUserid(userid) {
  return User.findOne({ userid });
}

export async function findById(id) {
  return User.findById(id);
}

export async function getAll() {
  return auth;
}

export async function getAllByUserid(userid) {
  return auth.filter((auth) => auth.userid === userid);
}

// 로그인
export async function login(userid, password) {
  const user = users.find(
    (user) => user.userid === userid && user.password === password
  );
  return user;
}
