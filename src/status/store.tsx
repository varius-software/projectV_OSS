import { createStore } from "@reduxjs/toolkit";
import React from "react";

function countterReducer({state = {value: 1}, action}: any) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

let storePal = createStore(countterReducer);

export default function Returnstatus () {
  return (
      <>
        {storePal}
      </>
  )
}