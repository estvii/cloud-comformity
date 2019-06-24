const {
    fetchData,
    serviceRulesLinker,
    serviceBlockGenerator
} = require('./main.js');

// fetching doesnt seem to work with jest
// test('fetching data from api should be successful', async () => {
//     expect.assertions(1);
//     const data = await fetchData();
//     console.log(data);
//     expect(data.name).toEqual('Leanne Graham');
// });