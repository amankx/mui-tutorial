import { Stack, TextField, InputAdornment, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const MuiTextField = () => {
  const [visibility, setVisibility] = useState(false);
  console.log({ visibility });
  const changeIcon = () => {
    setVisibility(!visibility);
  };
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label={"Name"} variant="filled" />
        <TextField label={"Name"} variant="outlined" />
        <TextField label={"Name"} variant="standard" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label={"Name"}
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label={"Form Input"} size="small" required />
        <TextField
          label={"Password"}
          size="small"
          variant="standard"
          type="password"
          helperText="Do not share your password"
        />
        <TextField
          label="Read only"
          slotProps={{ input: { readOnly: true } }}
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Weight"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Amount"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            },
          }}
        />
        <TextField
          label={"Password"}
          size="small"
          variant="standard"
          type={visibility ? "text" : "password"}
          helperText="Do not share your password"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="text" onClick={changeIcon}>
                    {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </Button>
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>
    </Stack>
  );
};
