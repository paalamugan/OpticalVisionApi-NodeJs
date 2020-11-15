# Get Started

```shell
cd  OpticalVisionApi-NodeJs
nvm use
```

- Run Mysql server via docker

```shell
docker run -d --name mysql -p 3306:3306 -e MYSQL_USER=root -e MYSQL_PASSWORD=root -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=opticalvision -v /data/db/mysql:/var/lib/mysql mysql:5.7
```

or

- Run Mysql server via docker-compose

```shell
docker-compose up -d
```

Optical Application using NodeJs Rest Api

```shell
npm install
```

## Development

- Start a development server

```shell
npm run dev
```

## Production

- Start a production server

```shell
npm run serve
```

curl --header "Content-Type: application/json" -d "{\"companyName\":\"sdsfsd\",\"tinNumber\":\"134\", \"userName\":\"sdsfsd\", \"companyName\":\"sdsfsd\", \"companyName\":\"sdsfsd\"}" http://localhost:9000/api/visionapp/company/register
