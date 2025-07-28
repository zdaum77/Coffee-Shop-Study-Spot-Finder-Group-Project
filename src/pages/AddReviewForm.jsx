import { useState } from "react";
import { Link as RouterLink } from "react-router";
import { Grid, Typography, Rating, Button, styled } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { BorderAllRounded } from "@mui/icons-material";
import { nanoid } from "nanoid";
import Swal from

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function AddReviewForm() {
  // this one here is foreach foodrating seatrating etc..
  const [foodRating, setFoodRating] = useState(0);
  const [seatingRating, setSeatingRating] = useState(0);
  const [environmentRating, setEnvironmentRating] = useState(0);
  const [wifiRating, setWifiRating] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "#FFF4EA",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          py: "60px",
        }}
      >
        <Typography variant="h3">Add New Review</Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: "20px" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Shop Name"
            variant="outlined"
          />
        </Box>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: "20px" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Address"
            variant="outlined"
          />
        </Box>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Box
              style={{
                display: "flex",
                m: 5,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ mr: 1 }}>
                Food
              </Typography>
              <Rating
                name="simple-controlled"
                value={foodRating}
                onChange={(event, newValue) => {
                  setFoodRating(newValue);
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                m: 5,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ mr: 1 }}>
                Seating
              </Typography>
              <Rating
                name="simple-controlled"
                value={seatingRating}
                onChange={(event, newValue) => {
                  setSeatingRating(newValue);
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                m: 5,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ mr: 1 }}>
                Enviroment
              </Typography>
              <Rating
                name="simple-controlled"
                value={environmentRating}
                onChange={(event, newValue) => {
                  setEnvironmentRating(newValue);
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                m: 5,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ mr: 1 }}>
                Wifi
              </Typography>
              <Rating
                name="simple-controlled"
                value={wifiRating}
                onChange={(event, newValue) => {
                  setWifiRating(newValue);
                }}
              />
            </Box>
          </Grid>
          <Grid
          size={{ sm: 12, md: 6 }}
            container
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#8e684f",   borderRadius: "25px"}}
          >
            <Box>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                style={{ backgroundColor: "#795548" }}
              >
                Upload files
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AddReviewForm;
