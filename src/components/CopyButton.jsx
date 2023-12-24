import toast from "react-hot-toast";
import { PiCopySimple, PiCheckBold } from "react-icons/pi";
import { useState } from "react";

const CopyButton = ({ messageToCopy }) => {
  const [showCopy, setShowCopy] = useState(true);
  const handleCopy = () => {
    navigator.clipboard.writeText(messageToCopy);
    toast("✅ Successfully copied to clipboard!");
    setShowCopy(false);
    setTimeout(() => setShowCopy(true), 3000);
  };
  return (
    <div onClick={() => handleCopy()}>
      {showCopy ? (
        <PiCopySimple className="absolute inline text-2xl text-code-gray hover:text-code-white hover:cursor-pointer top-0 right-0 m-3" />
      ) : (
        <PiCheckBold className="absolute inline text-2xl text-code-gray hover:text-code-white hover:cursor-pointer top-0 right-0 m-3" />
      )}
    </div>
  );
};

export default CopyButton;
