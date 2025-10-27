# Running MongoDB Locally with Docker

This guide explains how to set up and run a local MongoDB instance using Docker for development purposes.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine.

## Instructions

1.  **Create a `docker-compose.yml` file:**
    Create a file named `docker-compose.yml` in the root of the project with the following content:

    ```yaml
    version: '3.8'
    services:
      mongodb:
        image: mongo:latest
        container_name: mongodb
        ports:
          - "27017:27017"
        volumes:
          - mongo-data:/data/db
        environment:
          - MONGO_INITDB_ROOT_USERNAME=root
          - MONGO_INITDB_ROOT_PASSWORD=example
    volumes:
      mongo-data:
    ```

2.  **Start the MongoDB container:**
    Open a terminal in the root of the project and run the following command:

    ```bash
    docker-compose up -d
    ```

    This will start a MongoDB container in detached mode.

3.  **Connect to the database:**
    You can now connect to the MongoDB instance using the following connection string:

    ```
    mongodb://root:example@localhost:27017/
    ```

    You can use a tool like MongoDB Compass or the `mongo` shell to connect.

4.  **Stopping the container:**
    To stop the container, run:

    ```bash
    docker-compose down
    ```

    This will stop and remove the container. The data will be persisted in the `mongo-data` volume.