# Dockerized hardhat with Create2Deployer contract deployed

## Requirements

- NVM or NodeJS `v14.17.6`
- Docker `v20.10.8`
- Yarn `v1.22.10`

## Setup

1. Build Docker image

```bash
docker build . -t hardhat
```

2. Run Docker image

```bash
# !NOTE: Double check no other programs are using that port 8545
docker run -it -d -p 8545:8545 --name hardhat hardhat
```

3. Verify that container is running

```bash
docker logs --follow hardhat
# Should see an output of wallet addresses and private keys
```

Voilà!

Don't forget to delete your container when you're done.

```bash
docker rm -f hardhat
```
