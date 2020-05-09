#!/bin/bash

cd $(dirname $0)/..

echo "deploy stack"
aws cloudformation update-stack --stack-name lambda --template-body file://aws/template.yml --region ap-southeast-2 --capabilities CAPABILITY_IAM
