import toast from "react-hot-toast";

const handleCopy = (code) => {
  navigator.clipboard.writeText(code);
  toast("✅ Successfully copied to clipboard!");
};
export default handleCopy;
