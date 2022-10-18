# swagger-spec

Central place for all swagger spec files.
# openapi-merge-cli
In order to use this merging cli tool you need to have one or more OpenAPI 3.0 files that you wish to merge. Then you need to create a configuration file, called openapi-merge.json by default, in your current directory. It should look something like this:
```
{
  "inputs": [
    {
      "inputFile": "./gateway.swagger.json"
    },
    {
      "inputFile": "./jira.swagger.json",
      "pathModification": {
        "stripStart": "/rest",
        "prepend": "/jira"
      },
      "operationSelection": {
        "includeTags": ["included"]
      },
      "description": {
        "append": true
      }
    },
    {
      "inputFile": "./confluence.swagger.yaml",
      "dispute": {
        "prefix": "Confluence"
      },
      "pathModification": {
        "prepend": "/confluence"
      },
      "operationSelection": {
        "excludeTags": ["excluded"]
      }
    }
  ], 
  "output": "./output.swagger.json"
}
```

And then, once you have your Inputs in place and your configuration file you merely run the following in the directory that has your configuration file:
> npx openapi-merge-cli

> npx openapi-merge-cli --config path/to/openapi-merge.yaml