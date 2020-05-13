#!/bin/bash

echo "create role for lambda"
aws iam create-role --role-name lambda-ex --assume-role-policy-document file://lambda-execute-role-policy.json
#Output
#{
#    "Role": {
#        "Path": "/",
#        "RoleName": "lambda-ex",
#        "RoleId": "AROA54JAXOMVPVVTXIBIF",
#        "Arn": "arn:aws:iam::954088256298:role/lambda-ex",
#        "CreateDate": "2020-05-13T12:25:59Z",
#        "AssumeRolePolicyDocument": {
#            "Version": "2012-10-17",
#            "Statement": [
#                {
#                    "Effect": "Allow",
#                    "Principal": {
#                        "Service": "lambda.amazonaws.com"
#                    },
#                    "Action": "sts:AssumeRole"
#                }
#            ]
#        }
#    }
#}

echo "attach policy on role for lambda"
aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

echo "create lambda function"
aws lambda create-function \
    --region ap-southeast-2 \
    --function-name sunjing-function \
    --runtime nodejs12.x \
    --zip-file fileb://lambda-code.zip \
    --handler index.handler \
    --role arn:aws:iam::954088256298:role/lambda-ex
