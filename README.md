# About it
This project was created to share one of the discussed topics about meetup 'Agile Infra': Hyper.sh container hosting
https://www.meetup.com/opensanca/events/239287178/

#### Build image

`docker build -t opensanca-hyper-helloworld .`

#### Login and push to dockerhub
`docker login`
`docker push opensanca-hyper-helloworld`

#### Intall and configure hyper.sh CLI

https://docs.hyper.sh/GettingStarted/install.html

#### Pulling image from dockerhub to hyper.sh account

`hyper pull`

#### Starting container

`hyper run -d --name opensanca-hyper-helloworld -p 80:80 opensanca-hyper-helloworld`
`hyper run -d --name opensanca-hyper-helloworld --size s1 -p 80:80 opensanca-hyper-helloworld`

#### Generate public IP

`hyper fip allocate 1`

#### Attach new public ip to container

`hyper fip attach <PUBLIC IP> opensanca-hyper-helloworld`

#### Testing..

`curl http://<PUBLIC IP>`

#### Docker-compose

`hyper docker-compose`
