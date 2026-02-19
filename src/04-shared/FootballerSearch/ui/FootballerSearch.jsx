import { useRef } from "react";

export const FootballerSearch = () => {
  const ref = useRef(null);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Footballer Search App</h1>
      <div style={{ textAlign: "center" }}>
        <input
          style={{ padding: "0.5rem", width: "30%" }}
          ref={ref}
          type="text"
          onChange={() => console.log(ref)}
          placeholder="Search for a footballer..."
        />
      </div>
    </>
  );
};
