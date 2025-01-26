# JSON Server - Anime Data API

This is a mock API for storing and retrieving anime data. The API is designed to help front-end developers fetch anime information, store it in arrays, and display it. The data includes essential information like anime title, description, genre, rating, episodes, and more.

## Data Structure

Each anime entry follows this structure:

```json
{
  "id": "",  // Unique ID
  "title": "",  // movie title
  "type": "",  // movie, TV Show, series
  "description": "",  // Brief description
  "genre": [],  // List of genres (e.g., "Action", "Adventure", etc.)
  "release": "",  // Release year (e.g., "2022")
  "rating": 0,  // Rating (out of 10)
  "age": [],  // Age rating (e.g., ["13+", "Teens"])
  "language": [],  // Language(s) the anime is available in (e.g., ["Japanese"])
  "video": "",  // Link to the official video (if available)
  "cover": "",  // Image URL for the cover of the anime
  "thumbnail": "",  // Image URL for the thumbnail
  "duration": "",  // Duration (e.g., "24 minutes")
  "studio": "",  // Studio responsible for production (e.g., "MAPPA")
  "tags": "",  // Tags for filtering (e.g., "action", "adventure")
  "country": [],  // Country of origin (e.g., ["Japan"])
  "subtitles": [],  // List of available subtitles (e.g., ["English", "Spanish"])
  "audio": [],  // Available audio languages (e.g., ["Japanese"])
  "episodes": [  // List of episodes
    {"episode": 1, "link": ""},
    {"episode": 2, "link": ""},
    {"episode": 3, "link": ""}
  ]
}
