import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ btnText }) => {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  return (
    <button type="submit" className="btn btn-primary" disabled={submitting}>
      {submitting ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : (
        btnText
      )}
    </button>
  );
};

export default SubmitBtn;
