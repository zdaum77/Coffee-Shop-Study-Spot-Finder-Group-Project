import { useState } from "react";
import { Link as RouterLink } from "react-router";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

function Home() {
  const [reviews] = useState(() => {
    const stored = localStorage.getItem("reviews");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div
      style={{
        backgroundColor: "#FFF4EA",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <Container sx={{ py: 10 }}>
        <Typography variant="h3">Places You Visit</Typography>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          {reviews.length === 0 ? (
            <Typography variant="h6" sx={{ mt: 4 }}>
              No reviews yet.
            </Typography>
          ) : (
            reviews.map((review) => (
              <Grid size={{ sm: 12, md: 6, lg: 4 }}>
                <Card sx={{ backgroundColor: "#b89f89" }}>
                  <CardMedia
                    sx={{ height: 140, backgroundColor: "#8e684f" }}
                    image={review.images?.length ? review.images[0] : ""}
                    title={review.shopName}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: " bold" }}
                    >
                      {review.shopName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Address: {review.address}
                      <br />
                      Overall Rating: {review.overallRating.toFixed(1)} ⭐
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{ backgroundColor: "#795548", color: "#E6E0D4" }}
                      component={RouterLink}
                      to={`/review/${review.id}`}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
