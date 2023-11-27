"use client";

import { useState } from "react";
import Account from "./Account";
import Splash from "./Splash";

const Register = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      {state === 0 && <Account setState={setState} />}
      {state === 1 && <Splash />}
    </div>
  );
};

export default Register;
