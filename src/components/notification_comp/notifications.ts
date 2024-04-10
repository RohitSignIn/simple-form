import { toast } from "react-toastify";

const notifySuccess = (msg: string) => toast.success(msg);
const notifyInfo = (msg: string) => toast.info(msg);
const notifyWarning = (msg: string) => toast.warn(msg);
const notifyError = (msg: string) => toast.error(msg);

export { notifySuccess, notifyInfo, notifyWarning, notifyError };
