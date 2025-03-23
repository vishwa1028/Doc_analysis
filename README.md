# Document Analysis Exercise

This repository contains a solution for the Document Analysis exercise, implementing a Flask API backend and a NextJS frontend to analyze text and extract top words excluding specified keyword macros. The project is containerized using Docker Compose and follows the 2-step Git workflow with two pull requests.

## Project Structure

- **`app.py`**: Flask API server with CORS support and the `/analyze` endpoint.
- **`Dockerfile`**: Dockerfile for the Flask API service.
- **`client/`**: NextJS frontend directory.
  - **`client/app/page.tsx`**: Client-side page fetching and displaying analysis results.
  - **`client/Dockerfile`**: Dockerfile for the NextJS service.
- **`docker-compose.yml`**: Configuration for running `flask-api` and `nextjs-app` services.
- **`README.md`**: This file.

## Features

- **Flask API**: 
  - Endpoint: `POST /analyze`
  - Input: JSON with `text_body`, `keyword_macros`, and `analysis_type`.
  - Output: Top 2 words excluding keyword macros for `analysis_type: "top_words"`.
- **NextJS Frontend**: Displays analysis results from the Flask API at `http://localhost:3000`.
- **Docker Compose**: Runs both services (`flask-api` on port 5000, `nextjs-app` on port 3000).

## Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (for local NextJS setup, if needed)
- [Python 3.9+](https://www.python.org/downloads/) (for local Flask testing, if needed)

## Setup and Running

### Using Docker Compose
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vishwa1028/Doc_analysis.git
   cd Doc_analysis
