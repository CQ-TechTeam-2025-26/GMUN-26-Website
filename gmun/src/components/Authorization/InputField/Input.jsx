import "./Input.css";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="form-input-parent">
      <div className="form-input">
        <Icon
          style={{
            width: "1.25rem",
            height: "1.25rem",
            color: "#22c55e",
          }}
        />
      </div>

      <input {...props} className="input-el"/>
    </div>
  );
};

export default Input;
