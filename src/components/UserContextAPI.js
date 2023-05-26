import React from "react";

const UserContextAPI = React.createContext()

const UserProvider = UserContextAPI.Provider
const UserConsumer = UserContextAPI.Consumer

export {UserConsumer , UserProvider}