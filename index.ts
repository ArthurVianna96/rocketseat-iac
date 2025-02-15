import * as aws from "@pulumi/aws";

const bucket = new aws.s3.BucketV2("first-bucket-iac", {
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

export const bucketName = bucket.id;
export const bucketArn = bucket.arn;
export const bucketRegion = bucket.region;
export const ecrName = ecr.name;
export const ercUri = ecr.repositoryUrl;
