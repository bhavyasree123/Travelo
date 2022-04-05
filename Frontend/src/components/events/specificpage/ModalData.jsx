import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 630,
  bgcolor: "background.paper",
  borderRadius: "4%",
  boxShadow: 24,
  p: 4,
};

export default function ModalData({ open, handleClose, data }) {
  const [venue, setVenue] = React.useState("");
  const [value, setValue] = React.useState(new Date());

  const handleChange = (event) => {
    setVenue(event.target.value);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <button
          onClick={handleClose}
          style={{
            float: "right",
            padding: "10px 15px",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          <CloseIcon />
        </button>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {data.title}
            </Typography>
            <br></br>

            <img
              style={{ width: 350, borderSpacing: "0 10px" }}
              src={data.image}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            ></img>
            <br></br>
            <br></br>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {data.location}
            </Typography>
          </Grid>
          <Grid item style={{ paddingRight: "90px" }}>
            <h2>Get a Quick quote</h2>
            <br></br>
            <br></br>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Select Date and Time"
                minDate={new Date()}
                inputFormat="dd/MM/yyyy   hh:mm  a"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
            <br></br>
            <br></br>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  --Select City--
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={venue}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Hyderabad</MenuItem>
                  <MenuItem value={2}>Bangalore</MenuItem>
                  <MenuItem value={3}>Chennai</MenuItem>
                  <MenuItem value={4}>Delhi</MenuItem>
                  <MenuItem value={5}>Mumbai</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br></br>
            <TextField type="name" label="Enter your Name"></TextField>
            <br></br>
            <br></br>
            <TextField type="email" label="Email"></TextField> <br></br>
            <br></br>
            <TextField type="tel" label="Mobile no"></TextField> <br></br>
            <br></br>
            <br></br>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
