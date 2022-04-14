# OpticalVision-NodeJs

Run Mysql server via docker

 docker run -d --name mysql -p 3306:3306 -e MYSQL_USER=root -e MYSQL_PASSWORD=root -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=opticalvision -v /mnt/e/development/git/OpticalVisionApi-NodeJs/data/db/mysql:/data/db mysql:latest

Optical Application using NodeJs Rest Api

```
npm install
```

## Development
- Start a development server
```
npm run dev
```

## Production
- Start a production server
```
npm run serve
```

curl --header "Content-Type: application/json" -d "{\"companyName\":\"sdsfsd\",\"tinNumber\":\"134\", \"userName\":\"sdsfsd\", \"email\":\"sdfsd@gmail.com\", \"password\":\"asdfg\",\"cnfPassword\":\"asdfg\",\"address\":\"asdfg\",\"phoneNumber\":\"6464646464\"}" http://localhost:9000/api/visionapp/company/register
