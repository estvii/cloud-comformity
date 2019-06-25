const serviceBlockGenerator = (item) => {
    const serviceBlocks = document.getElementById('service-blocks');
    const serviceBlocks2 = document.getElementById('service-blocks2');
    const rules = item.relationships.rules.data

    // create a div class for a service
    const serviceBlock = document.createElement('div');
    serviceBlock.setAttribute('class', 'service-block item');

    // Creating content i.e children for the service block div
    const h3 = document.createElement('h3');
    h3.textContent = item.attributes.name;

    // looping through the array of rules and appending it to the ul div
    const ul = document.createElement('ul')
    rules.map(rule => {
        const li = document.createElement('li');
        li.innerHTML = rule.id;
        ul.appendChild(li);
    })

    // Appending content to service-block
    serviceBlock.appendChild(h3);
    serviceBlock.appendChild(ul);

    // Attach the service-block div to the parent  div service blocks
    // Check if service title is Budgets, then appends it to a different div
    if (serviceBlock.childNodes[0].innerHTML == 'Budgets') {
        serviceBlocks2.appendChild(serviceBlock);
    } else {
        serviceBlocks.appendChild(serviceBlock);
    }
};

const serviceRulesLinker = (included) => {

    const all_lis = document.getElementsByTagName('li');

    // looping through existing rules on page and overwriting them with included datas
    for (let li of all_lis) {
        included.map((item) => {
            if (li.innerHTML === item.id) {
                // console.log('matched'); should match 510 times because theres 510 rules
                li.innerHTML = item.attributes.title
            }
        })
    }
};


const fetchData = async () => {
    let response = await fetch('https://us-west-2.cloudconformity.com/v1/services');
    let object = await response.json();
    const sortedData = object.data.sort((a, b) => (a.attributes.name > b.attributes.name) ? 1 : -1);
    // console.log(sortedData);
    sortedData.map(item => {
        // console.log(item);
        serviceBlockGenerator(item);
    });

    serviceRulesLinker(object.included);
}

fetchData();