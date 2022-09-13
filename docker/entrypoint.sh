#!/bin/sh

# Change to the correct directory
cd /usr/src/app;

# Start hardhat node as a background process
yarn start:local &
# Wait for hardhat node to initialize. There doesn't seem to be a signal from hardhat node
# to indicate initialization
sleep 5;
# Deploy contracts
yarn deploy:local;

# The hardhat node process never completes
# Waiting prevents the container from pausing
wait $!