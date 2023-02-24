import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

interface Error{
  error?: FetchBaseQueryError | SerializedError | undefined;
  message?:String | null
}

export const Error=({error, message}:Error)=>{
    return (
      <>
        <h2>{error ? "Invalid request": message ? message : "500 Internal server error"}</h2>
      </>
    )
  }