import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.BucketV2("first-bucket-iac", {
    bucket: "first-bucket-iac",
    tags: {
        IAC: "true",
    }
});

const ecr = new aws.ecr.Repository("first-repo-iac", {
    name: "first-repo-iac",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: "true",
    }
})

export const firstBucketName = firstBucket.id;
export const firstBucketArn = firstBucket.arn;
export const firstBucketRegion = firstBucket.region;

export const ecrName = ecr.name;
export const ercUri = ecr.repositoryUrl;
