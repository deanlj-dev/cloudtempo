import { DescribeInstancesResult } from "aws-sdk/clients/ec2";
import { Document } from "../../src/document";

export async function getAllEC2Instances(
  credentials: any,
  region: string
): Promise<Document[]> {
  const ec2 = new AWS.EC2({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: DescribeInstancesResult = await ec2
      .describeInstances({
        NextToken: token,
      })
      .promise();

    const instances = response.Reservations?.flatMap((r) => r.Instances ?? []);

    documents = [
      ...documents,
      ...(instances ?? []).map((instance) => ({
        name:
          instance.Tags?.find((t) => t.Key === "Name")?.Value ??
          instance.InstanceId ??
          "unnamed-instance",
        // todo
        arn: `arn:aws:ec2:${region}:<ACCOUNT_ID>:instance/${
          instance.InstanceId ?? "instance-id-missing"
        }`,
        description: "",
        extraFields: {
          instanceId: instance.InstanceId ?? "",
          instanceType: instance.InstanceType ?? "",
          imageId: instance.ImageId ?? "",
          vpcId: instance.VpcId ?? "",
        },
        awsService: "ec2",
        region,
      })),
    ];
    token = response.NextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}