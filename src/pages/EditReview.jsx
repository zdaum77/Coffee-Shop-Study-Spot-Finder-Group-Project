import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { nanoid } from "nanoid";
import Swal from "sweetalert2";
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

function EditReviewForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [images, setImages] = useState([]);

  // Ratings
  const [foodRating, setFoodRating] = useState(0);
  const [seatingRating, setSeatingRating] = useState(0);
  const [environmentRating, setEnvironmentRating] = useState(0);
  const [wifiRating, setWifiRating] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    const existingReviews = localStorage.getItem("reviews");
    const reviews = existingReviews ? JSON.parse(existingReviews) : [];
    const reviewToEdit = reviews.find((rev) => rev.id === id);

    if (reviewToEdit) {
      setShopName(reviewToEdit.shopName);
      setAddress(reviewToEdit.address);
      setImages(reviewToEdit.images || []);

      const ratings = reviewToEdit.ratings || {};
      setFoodRating(ratings.food || 0);
      setSeatingRating(ratings.seating || 0);
      setEnvironmentRating(ratings.environment || 0);
      setWifiRating(ratings.wifi || 0);
    }

    setIsLoaded(true); 
  }

  const handleImageUpload = (e) => {
    // Convert FileList to a real array using spread op
    const files = [...e.target.files];

    if (files.length === 0) {
      setImages([]); // clear da images if no files selected
      return;
    }

    const loadedImageUrls = [];
    let loadedCount = 0;

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        loadedImageUrls.push(event.target.result);
        loadedCount++;
        // Once all files are loaded, update the state
        if (loadedCount === files.length) {
          setImages((prevImages) => [...prevImages, ...loadedImageUrls]);
        }
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        Swal.fire({
          title: "Error in uploading image",
          text: "Please try again.",
          icon: "error",
        });
        loadedCount++;
        if (loadedCount === files.length) {
          setImages((prevImages) => [...prevImages, ...loadedImageUrls]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleSave = () => {
    if (!shopName || !address || images.length === 0) {
      Swal.fire({
        title:
          "Please fill in the shop name, address, and upload at least one image.",
        icon: "warning",
      });
      return;
    }

    const overallRating =
      (foodRating + seatingRating + environmentRating + wifiRating) / 4;

    const updatedReview = {
      id,
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

    const existingReviews = localStorage.getItem("reviews");
    const reviews = existingReviews ? JSON.parse(existingReviews) : [];

    const updatedReviews = reviews.map((r) =>
      r.id === id ? updatedReview : r
    );

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    Swal.fire({
      title: "Review Updated",
      icon: "success",
    });

    navigate("/");
  };

  return (
    <div
      style={{
        backgroundColor: "#FFF4EA",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <Container maxWidth="md" sx={{ py: "60px" }}>
        <Typography variant="h3">Edit Review</Typography>

        {/* Back to Home */}
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          sx={{
            mt: 2,
            mb: 4,
            borderColor: "#5D4037",
            color: "#5D4037",
            "&:hover": {
              backgroundColor: "#5D4037",
              color: "#fff",
              borderColor: "#5D4037",
            },
          }}
        >
          Back to Home
        </Button>

        {/* Shop Name */}
        <Box sx={{ mt: "20px" }}>
          <TextField
            fullWidth
            label="Shop Name"
            variant="outlined"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#a97c57",
                  border: "2px solid #a97c57",
                  borderRadius: "12px",
                },
                "&:hover fieldset": {
                  borderColor: "#8e684f",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D4A373",
                },
                "& input": {
                  backgroundColor: "#fffaf5",
                },
              },
            }}
          />
        </Box>

        {/* Address */}
        <Box sx={{ mt: "20px" }}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#a97c57",
                  border: "2px solid #a97c57 ",
                  borderRadius: "12px",
                },
                "&:hover fieldset": {
                  borderColor: "#8e684f",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D4A373",
                },
                "& input": {
                  backgroundColor: "#fffaf5",
                },
              },
            }}
          />
        </Box>

        {/* Ratings and Upload */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} size={{ sm: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#fffaf5",
                  border: "2px solid #a97c57",
                  borderRadius: "20px",
                  padding: "20px",
                  mb: 2,
                }}
              >
                <Typography>Food</Typography>
                <Rating
                  value={foodRating}
                  onChange={(e, newVal) => setFoodRating(newVal)}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#fffaf5",
                  border: "2px solid #a97c57",
                  borderRadius: "20px",
                  padding: "20px",
                  mb: 2,
                }}
              >
                <Typography>Seating</Typography>
                <Rating
                  value={seatingRating}
                  onChange={(e, newVal) => setSeatingRating(newVal)}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#fffaf5",
                  border: "2px solid #a97c57",
                  borderRadius: "20px",
                  padding: "20px",
                  mb: 2,
                }}
              >
                <Typography>Environment</Typography>
                <Rating
                  value={environmentRating}
                  onChange={(e, newVal) => setEnvironmentRating(newVal)}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#fffaf5",
                  border: "2px solid #a97c57",
                  borderRadius: "20px",
                  padding: "20px",
                  mb: 2,
                }}
              >
                <Typography>Wi-Fi</Typography>
                <Rating
                  value={wifiRating}
                  onChange={(e, newVal) => setWifiRating(newVal)}
                />
              </Box>
            </Grid>

            {/* Upload Section */}
            <Grid
            size={{ sm: 12, md: 6 }}
              item
              xs={12}
              sm={6}
              container
              justifyContent="center"
              alignItems="center"
              sx={{ backgroundColor: "#8e684f", borderRadius: "25px", p: 3 }}
            >
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                sx={{
                  backgroundColor: "#795548",
                  "&:hover": { backgroundColor: "#6a4a3e" },
                }}
              >
                Upload Images
                <VisuallyHiddenInput
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  onClick={(e) => (e.target.value = null)}
                />
              </Button>
             
            </Grid>
          </Grid>
        </Box>

        {/* Save Button */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor: "#5D4037",
              "&:hover": {
                backgroundColor: "#4E342E",
              },
              color: "white",
            }}
          >
            Save Review
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default EditReviewForm;
