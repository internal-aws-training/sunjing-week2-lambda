#!/bin/bash

cd $(dirname $0)/..

S3_BUCKET=lambda-code-hello-word
REGION=ap-southeast-2
ZIP_FILE=hello-world-event.zip

echo "compress event lambda code"
zip  ${ZIP_FILE} ./event-lambda/**/*

if aws s3 ls s3://${S3_BUCKET} --region ${REGION} 2>&1 | grep 'not exist'
then
  echo "create s3 bucket"
  aws s3api create-bucket --bucket ${S3_BUCKET} --region ${REGION}
fi

echo "upload to event lambda code to s3 bucket"
aws s3 cp ${ZIP_FILE} s3://${S3_BUCKET}/ --region ${REGION}


echo "delete event lambda comressed file"
rm -rf ${ZIP_FILE}




