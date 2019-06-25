## cloud-comformity JSON:API from Browser

### Description

Create a replica of Cloud Conformity Knowledge Base Index using only HTML, CSS and Javascript by consuming their API from the browser.
Currently deployed on [AWS S3 bucket](http://cloud-conformity-json-browser-api.s3-website-us-east-1.amazonaws.com/)

### Setup process

```
git clone https://github.com/estvii/cloud-comformity
cd cloud-comformity
npm install
open index.html
```

### Modules used
- bootstrap
- mocha + chai: For testing javascript
- node-fetch: Used to fetch data from api while testing, since node doesn't come with fetch when testing

