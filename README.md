## RUNNING YOUR POSTGRES IMAGE

`docker run --publish 5432:5432 --detach --name local-postgres -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -d postgres`
