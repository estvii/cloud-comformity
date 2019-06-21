const serviceBlocks = document.getElementById('service-blocks');


const fetchData = async () => {
    let response = await fetch('https://us-west-2.cloudconformity.com/v1/services');
    let object = await response.json();
    object.data.map(item => {
        console.log(item.relationships.rules.data);

        // create a div class for a service
        const serviceBlock = document.createElement('div');
        serviceBlock.setAttribute('class', 'service-block');

        // Creating content i.e children for the service block div
        const h3 = document.createElement('h3');
        h3.textContent = item.attributes.name;

        const ul = document.createElement('ul')
        const li = document.createElement('li');
        li.innerHTML = 'rules';
        ul.appendChild(li);

        // Appending content to service-block
        serviceBlock.appendChild(h3);
        serviceBlock.appendChild(ul);


        // Attach the service-block div to the parent  div service blocks
        serviceBlocks.appendChild(serviceBlock);

    });

}


fetchData();


