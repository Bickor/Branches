# Branches

Welcome to branches, were you learn where you came from.

## Run
### Docker
To run the project, simply run:
`
docker run -p 3000:3000 branches
`

### React
To run the project with just react, run:
`
npm start
`

## Build
If you changed something, you can rebuild the docker image to show these changes:
`
docker build -t <name_of_image> .
`

In my case the image name is branches.