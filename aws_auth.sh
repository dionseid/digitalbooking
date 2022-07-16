#!/bin/sh

set -e

AWS_PASSWORD=$(docker run --rm \
    -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
    -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
    amazon/aws-cli ecr get-login-password \
    --region $AWS_DEFAULT_REGION)
ENCODED=$(echo -n "AWS:$AWS_PASSWORD" | base64)
PAYLOAD=$( jq -n --arg userpass "$ENCODED" '{"auths": {"$AWS_ECR_REGISTRY": {"auth": $userpass}}}' )
curl --request PUT --header "PRIVATE-TOKEN:$TOKEN" "https://gitlab.com/api/v4/projects/$PROJECT_ID/variables/AWS_ECR_AUTH" --form "value=$ENCODED"
curl --request PUT --header "PRIVATE-TOKEN:$TOKEN" "https://gitlab.com/api/v4/projects/$PROJECT_ID/variables/DOCKER_AUTH_CONFIG" --form "value=$PAYLOAD"