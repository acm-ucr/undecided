import toast from "react-hot-toast";

export function handleCopy(code) {
  navigator.clipboard.writeText(code);
  toast("✅ Successfully copied to clipboard!");
}
