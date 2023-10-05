import styles from "./input.module.css";
export const TextInput = ({ label,className }) => {
  return (
    <div className={`flex flex-col relative ${className}`}>
      <label className="absolute top-[-10px] left-[8px] bg-white" htmlFor="">{label}</label>
      <input className={`${styles.TextInput} outline-0 h-[40px] text-[14px] pl-[8px]`}  type="text" />
    </div>
  );
};
