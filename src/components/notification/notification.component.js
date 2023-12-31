import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/ui-slice";
export default function Notification({ type, message }) {
  const { open } = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };
  const render = open ? (
    <div>
      <Alert severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </div>
  ) : null;
  return render;
}
