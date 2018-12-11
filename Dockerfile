# Node version
FROM node:8.11.4
ENV NPM_CONFIG_LOGLEVEL warn
# Install HTTP server to run the application
RUN npm install -g serve
# Run serve when the image is running
CMD serve -s build
# Expose the docker port so it knows where it's running
EXPOSE 3000

# --------------------------------------------------------------------
# All uncommon and changing parts for the dockerfile

# Copy certain packages, so Docker doesn't have to add all the node modules
# Then run the install command to install all the nodes to the docker image 
    # This makes the building phase faster
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install 

# Copy the files into the image when building images
COPY . . 

# Build the production 
RUN npm run build --



# step 1: 
    # docker build -t {docker image name} .

# step 2:
    # docker run -p 5000:5000 {docker image name}



