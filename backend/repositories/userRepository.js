import userModel from "../models/userModel.js";

const findOne = async ({ email }) => {
    const user = await userModel.findOne({ email });
    return user;
  };
  
  const create = async ({ email, password }) => {
    const user = await userModel.create({ email, password });
    return user;
  };
  
  export const userRepository = {
    findOne,
    create,
  };