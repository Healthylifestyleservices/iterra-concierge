#!/bin/bash

# iTERRA Docker Deployment Script
set -e

echo "🚀 Starting iTERRA Wellness Hub Deployment..."

# Check if SUPABASE_ANON_KEY is provided
if [ -z "$SUPABASE_ANON_KEY" ]; then
    echo "❌ Error: SUPABASE_ANON_KEY environment variable is required"
    echo "Usage: SUPABASE_ANON_KEY=your_key ./deploy.sh"
    exit 1
fi

# Build the Docker image
echo "📦 Building iTERRA Docker image..."
docker build -t iterra-app:latest .

# Stop and remove existing container if it exists
echo "🛑 Stopping existing container..."
docker stop iterra-wellness-app 2>/dev/null || true
docker rm iterra-wellness-app 2>/dev/null || true

# Run the new container
echo "🏃 Starting iTERRA container..."
docker run -d \
  --name iterra-wellness-app \
  --restart unless-stopped \
  -p 3000:80 \
  -e SUPABASE_ANON_KEY="$SUPABASE_ANON_KEY" \
  -e NODE_ENV=production \
  iterra-app:latest

# Wait for container to be healthy
echo "⏳ Waiting for container to be healthy..."
sleep 10

# Check container status
if docker ps | grep -q iterra-wellness-app; then
    echo "✅ iTERRA Wellness Hub deployed successfully!"
    echo "🌐 Access your application at: http://localhost:3000"
    echo "📊 Container status:"
    docker ps --filter name=iterra-wellness-app
else
    echo "❌ Deployment failed. Check logs:"
    docker logs iterra-wellness-app
    exit 1
fi