import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

export const MuiCheckbox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  console.log({ acceptTnc });
  const handleChange = () => {
    setAcceptTnc(!acceptTnc);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnc} />}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};