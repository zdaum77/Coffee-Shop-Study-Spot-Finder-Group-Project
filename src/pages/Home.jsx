import { useState, useMemo } from "react";
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
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

function Home() {
  const [reviews] = useState(() => {
    const stored = localStorage.getItem("reviews");
    return stored ? JSON.parse(stored) : [];
  });
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return reviews;
    const q = search.toLowerCase();
    return reviews.filter(
      (r) =>
        (r.shopName || "").toLowerCase().includes(q) ||
        (r.address || "").toLowerCase().includes(q)
    );
  }, [search, reviews]);

  return (
    <div
      style={{
        backgroundColor: "#FFF4EA",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{ color: "#534134ff", fontWeight: "600", mb: 2 }}
        >
          Places You <i>Visited...</i>
        </Typography>

        <TextField
          fullWidth
          placeholder="Search by shop name or address"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 4, maxWidth: 600 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {search && (
                  <IconButton
                    aria-label="clear"
                    size="small"
                    onClick={() => setSearch("")}
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />

        <Grid container spacing={2} sx={{ mt: 1 }}>
          {filtered.length === 0 ? (
            <Typography variant="h6" sx={{ mt: 4 }}>
              No reviews found.
            </Typography>
          ) : (
            filtered.map((review) => (
              <Grid
                item
                key={review.id}
                xs={12}
                sm={12}
                md={6}
                lg={4}
              >
                <Card
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(184, 159, 137, 1), rgb(163, 138, 117))",
                  }}
                  sx={{
                    p: "5px",
                    borderRadius: "10px",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 200,
                      backgroundColor: "#8e684f",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                    image={review.images?.length ? review.images[0] : ""}
                    title={review.shopName}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: " bold", color: "#4c382bff" }}
                    >
                      {review.shopName}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      <b> Address: {review.address}</b>
                      <br />
                      <i>Overall Rating: {review.overallRating.toFixed(1)} </i>
                      ⭐
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{
                        backgroundColor: "#795548",
                        color: "#E6E0D4",
                      }}
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
