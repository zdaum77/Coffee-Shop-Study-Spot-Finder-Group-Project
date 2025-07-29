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

function EditReviewPage() {

 return(
    <div
      style={{
        backgroundColor: "#FFF4EA",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <Container maxWidth="md" sx={{ py: "60px" }}>
        <Typography variant="h3">Add New Review</Typography>

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

        {/* Rating Section */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {/* Corrected Grid item sizes */}
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
            {/* Corrected Grid item sizes */}
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
                  onChange={handleImageUpload} // Correctly linked to the new handler
                  onClick={(e) => (e.target.value = null)} // Added for re-selecting same files
                />
              </Button>
              {images.length > 0 && (
                <Box sx={{ mt: 2, textAlign: "center", color: "white" }}>
                  <Typography variant="body2">
                    {images.length} image(s) selected
                  </Typography>
                </Box>
              )}
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
              backgroundColor: "#5D4037", // Corrected button color
              "&:hover": {
                backgroundColor: "#4E342E", // Corrected hover color
              },
              color: "white",
            }}
          >
            Save Review
          </Button>
        </Box>
      </Container>
    </div>
    
 )
}

export default EditReviewPage;