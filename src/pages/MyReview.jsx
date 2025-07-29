import { useParams } from "react-router";
import {
  Grid,
  Container,
  Typography,
  Rating,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

function MyReview() {
  const { id } = useParams();

  const review = (() => {
    const stored = localStorage.getItem("reviews");
    const reviews = stored ? JSON.parse(stored) : [];
    return reviews.find((r) => r.id === id);
  })();

  if (!review) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h5">Review not found.</Typography>
      </Container>
    );
  }

  const { shopName, address, ratings, images } = review;

  return (
    <div
      style={{
        backgroundColor: "#FFF4EA",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom>
          The Review
        </Typography>

        <Card sx={{ backgroundColor: "#b89f89", mb: 4 }}>
          <CardMedia
            component="img"
            height="300"
            image={images?.[0] || ""}
            alt={shopName}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {shopName}
            </Typography>
            <Typography variant="body1">Address: {address}</Typography>
          </CardContent>
        </Card>

        <Box sx={{ backgroundColor: "#f3e5dc", borderRadius: 2, p: 3, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Food</Typography>
                <Rating value={ratings?.food ?? 0} readOnly />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Seating</Typography>
                <Rating value={ratings?.seating ?? 0} readOnly />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Environment</Typography>
                <Rating value={ratings?.environment ?? 0} readOnly />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Wi-Fi</Typography>
                <Rating value={ratings?.wifi ?? 0} readOnly />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box display="flex" gap={2}>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#795548", color: "#E6E0D4" }}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#795548", color: "#E6E0D4" }}
          >
            Delete
          </Button>
           <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#795548", color: "#E6E0D4"
             }}
          >
            Back
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default MyReview;
