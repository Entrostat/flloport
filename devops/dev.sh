#!/bin/bash
CURRENT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"

cd ${CURRENT_PATH}/flloport-dev

docker-compose up --build