import { SSTConfig } from "sst"
import { NextjsSite } from "sst/constructs"

export default {
  config(_input) {
    return {
      name: "next-baseapp", // TODO: change this to your app's name
      region: "us-east-1", // TODO: change this to your preferred region
    }
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site")

      stack.addOutputs({
        SiteUrl: site.url,
      })
    })
  },
} satisfies SSTConfig
