# iTERRA Docker Deployment Guide

## Quick Start

### Basic Docker Run
```bash
# Run iTERRA with Supabase key from GitHub secrets
docker run -e SUPABASE_ANON_KEY=${{ secrets.SUPABASE_KEY }} iterra-app
```

### Local Development
```bash
# Build the image
docker build -t iterra-app .

# Run with your Supabase key
docker run -d \
  --name iterra-wellness \
  -p 3000:80 \
  -e SUPABASE_ANON_KEY="your_supabase_anon_key_here" \
  iterra-app
```

### Using Docker Compose
```bash
# Set environment variable
export SUPABASE_ANON_KEY="your_key_here"

# Deploy with compose
docker-compose up -d
```

### Using Deployment Script
```bash
# Make script executable
chmod +x scripts/deploy.sh

# Deploy with environment variable
SUPABASE_ANON_KEY="your_key" ./scripts/deploy.sh
```

## Environment Variables

- `SUPABASE_ANON_KEY`: Required. Your Supabase anonymous key
- `NODE_ENV`: Optional. Defaults to 'production'

## Container Details

- **Port**: 80 (mapped to host port 3000)
- **Health Check**: Available at `/health`
- **Base Image**: nginx:alpine
- **Build**: Multi-stage with Node.js 18

## GitHub Actions Integration

```yaml
- name: Deploy iTERRA
  run: |
    docker run -d \
      --name iterra-app \
      -p 3000:80 \
      -e SUPABASE_ANON_KEY=${{ secrets.SUPABASE_KEY }} \
      iterra-app:latest
```

## Monitoring

```bash
# Check container status
docker ps

# View logs
docker logs iterra-wellness-app

# Health check
curl http://localhost:3000/health
```