import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SnackBar() {
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          sx={{
            width: "100%",
            backgroundColor: "#78B6FF4D",
            color: "black",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "16.8px",
            fontFamily: "HK Grotesk, sans-serif",
          }}
          icon={false}
        >
          Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit
          card.{" "}
          <button
            className="underline"
            onClick={() => alert("Start Free Trial clicked")}
          >
            Start Free Trial
          </button>
        </Alert>
      </Snackbar>
    </div>
  );
}
