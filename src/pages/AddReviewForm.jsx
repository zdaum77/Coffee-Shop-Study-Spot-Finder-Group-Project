import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Typography,
  Button,
  styled,
  TextField,
  Container,
  Box,
  Grid,
  Rating,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { nanoid } from "nanoid";
import Swal from "sweetalert2";

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
  const navigate = useNavigate();

  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [images, setImages] = useState([]);

  // Ratings
  const [foodRating, setFoodRating] = useState(0);
  const [seatingRating, setSeatingRating] = useState(0);
  const [environmentRating, setEnvironmentRating] = useState(0);
  const [wifiRating, setWifiRating] = useState(0);

  const handleSave = () => {
    if (!shopName || !address) {
      Swal.fire({
        title: "Please enter shop name and address",
        icon: "warning",
      });
      return;
    }

    const overallRating = (foodRating + seatingRating + environmentRating + wifiRating) / 4;

    const newReview = {
      id: nanoid(),
      shopName,
      address,
      ratings: {
        food: foodRating,
        seating: seatingRating,
        environment: environmentRating,
        wifi: wifiRating,
      },
      overallRating,
      images,
      createdAt: Date.now(),
    };

    const existing = localStorage.getItem("reviews");
    const reviews = existing ? JSON.parse(existing) : [];

    const updatedReviews = [...reviews, newReview];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    Swal.fire({
      title: "Review saved!",
      icon: "success",
    });

    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "#FFF4EA", minHeight: "100vh", padding: "20px 0" }}>
      <Container maxWidth="md" sx={{ py: "60px" }}>
        <Typography variant="h3">Add New Review</Typography>

        <Box sx={{ mt: "20px" }}>
          <TextField
            fullWidth
            label="Shop Name"
            variant="outlined"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
        </Box>
        <Box sx={{ mt: "20px" }}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Box>

        {/* Rating Section */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} size={{ sm: 12, md: 6}} >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography>Food</Typography>
                <Rating value={foodRating} onChange={(e, newVal) => setFoodRating(newVal)} />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography>Seating</Typography>
                <Rating value={seatingRating} onChange={(e, newVal) => setSeatingRating(newVal)} />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography>Environment</Typography>
                <Rating value={environmentRating} onChange={(e, newVal) => setEnvironmentRating(newVal)} />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography>Wi-Fi</Typography>
                <Rating value={wifiRating} onChange={(e, newVal) => setWifiRating(newVal)} />
              </Box>
            </Grid>

            {/* Upload Section */}
            <Grid
            size={{ sm: 12, md: 6}} 
              item
              xs={12}
              md={6}
              container
              justifyContent="center"
              alignItems="center"
              sx={{ backgroundColor: "#8e684f", borderRadius: "25px", p: 3 }}
            >
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                sx={{ backgroundColor: "#795548" }}
              >
                Upload Images
                <VisuallyHiddenInput
                  type="file"
                  multiple
                  onChange={(e) => {
                    const fileNames = Array.from(e.target.files).map((f) => f.name);
                    setImages(fileNames);
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Save Button */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Review
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default AddReviewForm;
