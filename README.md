# LWS

## Set up

### Init dependencies
```
cp .env.example .env
chmod -R 777 storage
chmod -R 777 bootstrap
composer install
php artisan key:generate
yarn install
npm run dev
```
You need custom your .env config file to be continute.

### Run docker
Docker will be listen in IP Address: 0.0.0.0 at special port which defined in docker-compose.yml file.
Default, docker-compose define port at 8000.
```
# Run docker containers:
docker-compose up -d

# Add your Virtual host into hosts file:
# Example: 0.0.0.0 ws.app
sudo nano /etc/hosts
```
Open your browser, access to ws.app:8000.
