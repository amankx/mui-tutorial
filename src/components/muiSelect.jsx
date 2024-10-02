import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width={"300px"}>
      <TextField
        label={"select country"}
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        sx={{ textAlign: "left" }}
        slotProps={{
          select: {
            multiple: true,
          },
        }}
      >
        <MenuItem value={"IN"}>India</MenuItem>
        <MenuItem value={"US"}>United States</MenuItem>
        <MenuItem value={"AU"}>Australia</MenuItem>
      </TextField>
    </Box>
  );
};
