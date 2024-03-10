import { useState } from "react";

export const PageNotFound = () => {
  const [message] = useState("Page Not Found");
  return (
    <div className="container-fluid">
      <p className="text-danger">{message}</p>
    </div>
  );
};
