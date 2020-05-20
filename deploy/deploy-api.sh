#!/bin/bash

cd $(dirname $0)/..

BUCKET_NAME=sj-lambda-code

OUTPUT_TEMPLATE=template.yml

#aws s3 mb s3://${BUCKET_NAME}

aws cloudformation \
  package \
  --region ap-southeast-2 \
  --template-file ./aws/template-api-gateway.yml \
  --s3-bucket ${BUCKET_NAME} \
  --output-template-file ${OUTPUT_TEMPLATE}

#aws cloudformation deploy\
#  --stack-name lambda\
#  --template-file template.yml\
#  --region ap-southeast-2\
#  --capabilities CAPABILITY_IAM
