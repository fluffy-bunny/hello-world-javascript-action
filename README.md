# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

###  AZURE_SIGNTOOL_CONFIG
```json
{
	"kvu": "https://my-vault.vault.azure.net",
	"fd": "sha384",
	"kvu": "https://my-vault.vault.azure.net",
	"kvi": "01234567-abcd-ef012-0000-0123456789ab",
	"kvs": "<token>",
	"kvc": "my-key-name",
	"tr": "http://timestamp.digicert.com",
	"td": "sha384"
}
```

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1
with:
  who-to-greet: 'Mona the Octocat'