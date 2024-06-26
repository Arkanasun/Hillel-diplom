import "./Input.css";
import { IoMdEye } from "react-icons/io";

const Input = ({ label, placeholder, className, showIcon, onChange }) => {
  return (
    <label>
      {label}
      <input type="text" placeholder={placeholder} className={'label-input'} />
      {showIcon ?<IoMdEye size="34px" color="#44B26F"/> : null}
    </label>
  );
};

export default Input;
