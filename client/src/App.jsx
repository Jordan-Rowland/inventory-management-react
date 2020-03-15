import React, { useEffect, useState } from "react";
// import useStorage from "./hooks/useStorage"
// import { postFetchRequest } from "./helpers";
import ItemTable from "./components/ItemTable.jsx"


function App() {
  // const [ token, setToken ] = useState("");
  // const [ tokenAcquired, setTokenAcquired ] = useState(null);
  // const [ tokenStorage, setTokenStorage] = useStorage("token");

  // useEffect(() => {
  //   async function checkToken() {
  //     if (tokenStorage().length) {
  //       console.log("Token in storage");
  //       const tokenStored = tokenStorage()[0];
  //       const response = await postFetchRequest("/api/users/verify", {}, tokenStored);
  //       console.log(response);
  //       if (response.success) {
  //         handleLogin(tokenStored);
  //       }
  //     } else {
  //       setTokenAcquired(false);
  //     }
  //   }

  //   checkToken();
  // }, [])

  // function handleLogin(e) {
  //   const newToken = e;
  //   setToken(newToken);
  //   setTokenStorage(newToken)
  //   setTokenAcquired(true);
  // }

  // function handleLogout() {
  //   setToken("");
  //   localStorage.clear();
  //   setTokenAcquired(false);
  // }

  return(
    <>
      <ItemTable />
    </>
  );
}

export default App;