import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box component="footer" sx={{ mt: 5, py: 2, textAlign: "center", bgcolor: "#f5f5f5" }}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2025.2 Avanti DFS
      </Typography>
    </Box>
  );
}