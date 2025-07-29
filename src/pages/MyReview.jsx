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
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function MyReview() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get review from localStorage
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

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This review will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const stored = localStorage.getItem("reviews");
        const reviews = stored ? JSON.parse(stored) : [];

        const updatedReviews = reviews.filter((r) => r.id !== id);
        localStorage.setItem("reviews", JSON.stringify(updatedReviews));

        Swal.fire("Deleted!", "The review has been deleted.", "success");

        navigate("/");
      }
    });
  };

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

        {/* Side-by-side layout with same height */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          mb={4}
        >
          {/* Left side: Image and shop info */}
          <Card
            sx={{
              backgroundColor: "#b89f89",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={images?.[0] || ""}
              alt={shopName}
              sx={{ objectFit: "cover", width: "100%" }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {shopName}
              </Typography>
              <Typography variant="body1">Address: {address}</Typography>
            </CardContent>
          </Card>

          {/* Right side: Ratings */}
          <Box
            sx={{
              backgroundColor: "#f3e5dc",
              borderRadius: 2,
              p: 3,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" sx={{ minWidth: "120px" }}>
                    Food
                  </Typography>
                  <Rating value={ratings?.food ?? 0} readOnly />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" sx={{ minWidth: "120px" }}>
                    Seating
                  </Typography>
                  <Rating value={ratings?.seating ?? 0} readOnly />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" sx={{ minWidth: "120px" }}>
                    Environment
                  </Typography>
                  <Rating value={ratings?.environment ?? 0} readOnly />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" sx={{ minWidth: "120px" }}>
                    Wi-Fi
                  </Typography>
                  <Rating value={ratings?.wifi ?? 0} readOnly />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Buttons */}
        <Box display="flex" gap={2}>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#795548", color: "#E6E0D4" }}
            onClick={() => navigate(`/n/${review.id}`)}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#795548", color: "#E6E0D4" }}
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#795548", color: "#E6E0D4" }}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default MyReview;
