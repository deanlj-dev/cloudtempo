import { ListClustersResponse } from "aws-sdk/clients/ecs";
import { Document } from "../../src/document";

export async function getAllECSClusters(
  credentials: any,
  region: string
): Promise<Document[]> {
  const ecs = new AWS.ECS({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: ListClustersResponse = await ecs
      .listClusters({
        nextToken: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.clusterArns ?? []).map((cluster) => ({
        name: cluster.split("/").pop(),
        arn: cluster,
        description: "",
        awsService: "ecs_cluster",
        region,
      })),
    ];
    token = response.nextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}
