import { Grid, Container, Typography, Rating, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import Swal from "sweetalert2";
import { nanoid } from "nanoid";
import { Link as RouterLink, useNavigate } from "react-router";
function MyReview() {
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
      <Container sx={{ py: 10 }}>
        <Typography variant="h3">The Review</Typography>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Card sx={{ backgroundColor: "#b89f89" }}>
              <CardMedia
                sx={{ height: 140, backgroundColor: "#8e684f" }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="this is coffee"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shop Name
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Content
                </Typography>
              </CardContent>
            </Card>
          </Grid>
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MyReview;
