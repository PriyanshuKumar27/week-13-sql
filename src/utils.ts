import { Client } from "pg"

export async function getClient() {
  const client = new Client(
    "postgresql://test_owner:w2yIiYUKZ5Xz@ep-round-recipe-a5t7mxmu.us-east-2.aws.neon.tech/test?sslmode=require"
  )
  await client.connect()
  return client
}
