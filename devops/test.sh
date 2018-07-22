#!/bin/bash

CURRENT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"

cd ${CURRENT_PATH}/flloport-testing

TEST_NAME=$(uuidgen)

docker-compose -p ${TEST_NAME} up --build --abort-on-container-exit
STATUS=$?
docker-compose -p ${TEST_NAME} down
docker-compose -p ${TEST_NAME} rm --force

exit ${STATUS}