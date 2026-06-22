const express = require('express');
const app = express();

// Mock data for assets
const assets = [
  { id: 1, name: 'Asset A', type: 'Type 1', location: 'Location 1' },
  { id: 2, name: 'Asset B', type: 'Type 2', location: 'Location 2' },
  { id: 3, name: 'Asset C', type: 'Type 1', location: 'Location 3' },
  { id: 4, name: 'Asset D', type: 'Type 3', location: 'Location 1' },
  { id: 5, name: 'Asset E', type: 'Type 2', location: 'Location 2' }
];

// Helper function to sort assets
const sortAssets = (assets, sortBy) => {
  return assets.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });
};

// Endpoint to get assets with optional filtering and sorting
app.get('/api/assets', (req, res) => {
  let filteredAssets = [...assets];

  // Filtering
  if (req.query.type) {
    filteredAssets = filteredAssets.filter(asset => asset.type === req.query.type);
  }
  if (req.query.location) {
    filteredAssets = filteredAssets.filter(asset => asset.location === req.query.location);
  }

  // Sorting
  if (req.query.sortBy) {
    filteredAssets = sortAssets(filteredAssets, req.query.sortBy);
  }

  res.json(filteredAssets);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mock API server running on port ${PORT}`);
});
