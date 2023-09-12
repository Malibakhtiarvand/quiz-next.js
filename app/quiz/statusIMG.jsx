import success from "../assets/teacher1.jpg";
import Bad from "../assets/sadTeacher.jpg";

export const SuccessF = () => {
  return (
    <img
      style={{ width: "200px",height: "300px", display: "block", margin: "auto" }}
      src={success.src}
      alt="success"
    />
  );
};

export const BadF = () => {
  return (
    <img
      style={{ width: "200px",height: "300px", display: "block", margin: "auto" }}
      src={Bad.src}
      alt="bad"
    />
  );
};
