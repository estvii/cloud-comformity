const assert = require('chai').assert;
const fetch = require('node-fetch');

describe('fetching data', () => {
    it('should sucessfully fetch data from api with a status of 200', async () => {
        let res = await fetch('https://us-west-2.cloudconformity.com/v1/services');
        assert.equal(res.status, 200)
    });

    it('should return an object length of 2 after successful fetching', async () => {
        let res = await fetch('https://us-west-2.cloudconformity.com/v1/services')
        let object = await res.json();
        assert.equal(Object.keys(object).length, 2);
    });

    it('fetched item `data` should contain 62 items', async () => {
        let res = await fetch('https://us-west-2.cloudconformity.com/v1/services')
        let object = await res.json();
        assert.equal(object.data.length, 62);
    });

    it('fetched item `included` should contain 512 items', async () => {
        let res = await fetch('https://us-west-2.cloudconformity.com/v1/services')
        let object = await res.json();
        assert.equal(object.included.length, 512);
    });
});