import React from "react";

// interface ButtonProps {
//   handleSubmit: (value: any) => void;
//   title: string;
//   disabled?: boolean;
//   loading?: boolean;
//   errorMessage?: string;
//   error?: boolean;
// }

export function Button({
  title,
  handleSubmit,
  disabled,
  loading,
  errorMessage = "There was an error, please try again.",
  error,
}) {
  return (
    <div>
      <button className="submit-loginbutton" type="submit" onClick={handleSubmit}>
        {title}
      </button>
       <div className="error">{errorMessage}</div>
    </div>
  );
}
