# homework

The resource are deleted.
You can deploy it by the following steps.

## Basic

### Create Lambda which can copy file between S3 by cloudformation

![img](./doc/s3-trigger-lambda.png)

Upload a file with suffix ".txt" to original S3 bucket.
Then trigger the lambda, lambda will read file and copy file to destination S3 bucket.

The cloudformation template is `template-for-lambda-copy-from-s3`.

```
deploy/deploy.sh template-for-lambda-copy-from-s3 ${your-stack-name}
```
