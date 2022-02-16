#!bin/bash

GOOS=linux GOARCH=amd64 go build main.go

mv main web/main

scp -i /Users/michaelmulderink/mikes_personal_site/Mikes_Site.pem -r ../Mike_Personal_Site/web/ ubuntu@ec2-52-200-134-54.compute-1.amazonaws.com: