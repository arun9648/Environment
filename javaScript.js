// chatbot.js

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatLog = document.getElementById('chat-log');

    // Display user message in the chat log
    chatLog.innerHTML += `<div>User: ${userInput}</div>`;

    // Call the chatBot function and display its response
    const botResponse = chatBot(userInput);
    chatLog.innerHTML += `<div>ChatBot: ${botResponse}</div>`;

    // Clear the user input field
    document.getElementById('user-input').value = '';
}

function chatBot(userInput) {
    // Convert user input to lowercase for case-insensitivity
    userInput = userInput.toLowerCase();

    // Predefined responses
    const responses = {
        "what are you doing":"I was see beautiful nature.",
        "benefits of cleanliness":"Cleanliness gives a fresh and good look to our surroundings. Wearing a cleaned and ironed clothes protect you from skin infections. Cleanliness minimizes the entry of rats, cockroaches, and other parasitic worms or insects. Cleanliness gives rise to a good character by keeping body, mind, and soul clean and peacefu",
        "good environment":"Clean air and water, sanitation and green spaces, safe workplaces can enhance people's quality of life: reduced mortality and morbidity, healthier lifestyles, improved productivity of workers and their families, improve lives of women, children and elderly and are crucial to mental health.",
        "scope of environmental economics":"Environmental economics focuses on how they use and manage finite resources in a manner that serves the population while meeting concerns about environmental impact. This helps governments weigh the pros and cons of alternative measures and design appropriate environmental policies.",
        "environmental economics":"What Is Environmental Economics? Environmental economics is the study of the cost-effective allocation, use, and protection of the world's natural resources. Economics, broadly speaking, is the study of how humans produce and consume goods and services...............पर्यावरण अर्थशास्त्र पर्यावरण के मुद्दों से संबंधित अर्थशास्त्र का एक उप-क्षेत्र है। इक्कीसवीं सदी में बढ़ती पर्यावरणीय चिंताओं के कारण यह व्यापक रूप से अध्ययन का विषय बन गया है। पर्यावरण अर्थशास्त्र दुनिया भर में राष्ट्रीय या स्थानीय पर्यावरण नीतियों के आर्थिक प्रभावों का सैद्धांतिक या अनुभवजन्य अध्ययन करता है। ",
        "environment benefits":"The natural environment gives us a wealth of services that are difficult to measure in dollars. Natural areas help clean our air, purify our water, produce food and medicines, reduce chemical and noise pollution, slow floodwaters, and cool our streets.",
        "environmental":"The natural environment or natural world encompasses all living and non-living things occurring naturally, meaning in this case not artificial. The term is most often applied to Earth or some parts of Earth...........प्राकृतिक पर्यावरण या प्राकृतिक दुनिया में प्राकृतिक रूप से होने वाली सभी जीवित और निर्जीव चीजें शामिल हैं, जिसका अर्थ है कि इस मामले में कृत्रिम नहीं। यह शब्द अक्सर पृथ्वी या पृथ्वी के कुछ हिस्सों पर लागू होता है",
        "environment day drawing":"पहली से चौथी कक्षा तक के विद्यार्थियों के लिए 'पेड़ बचाओ, पृथ्वी बचाओ', 'स्वच्छ एवं हरित पर्यावरण', 'जल संरक्षण' विषय थे। जबकि 5वें से 10वें समूह को 'विश्व पर्यावरण दिवस', 'प्रदूषण मुक्त शहर' और 'शहरीकरण और पर्यावरण असंतुलन' पर ध्यान केंद्रित करने के लिए बनाया गया था।",
        "environment day":"World Environment Day is celebrated annually on 5 June and encourages awareness and action for the protection of the environment. It is supported by many non-governmental organizations, businesses, government entities, and represents the primary United Nations outreach day supporting the environment.",
        "environment protection act":"It empowers the Central Government to establish authorities charged with the mandate of preventing environmental pollution in all its forms and to tackle specific environmental problems that are peculiar to different parts of the country. The Act was last amended in 1991.",
        "human Impacts on the Environment":"Help your students understand the impact humans have on the physical environment with these classroom resources.",
        "wildfires":"A wildfire is an uncontrolled fire that burns in wildland vegetation, often in rural areas.",
        "light Pollution":"Boats, buildings, street lights, and even fireworks contribute to the light pollution in Victoria Harbor, Hong Kong. Light pollution can be detrimental to the health of people and animals in the area.",
        "air Pollution":"This densely wooded hillside along the banks of the Yangtze River, China, is shrouded by air pollution. Rapidly developing countries like China must often deal with air pollution as new factories emit substances such as smoke and carbon dioxide into the atmosphere.",
        "landfill":"Pollution is the introduction of harmful materials into the environment. Landfills collect garbage and other land pollution in a central location. Many places are running out of space for landfills.",
        "pollution":"Pollution is the introduction of harmful materials into the environment. These harmful materials are called pollutants.",
        "humans impact ":"Humans impact the physical environment in many ways: overpopulation, pollution, burning fossil fuels, and deforestation. Changes like these have triggered climate change, soil erosion, poor air quality, and undrinkable water. These negative impacts can affect human behavior and can prompt mass migrations or battles over clean water.",
        "human":"Human activities are the various actions for recreation, living, or necessity done by people. For instance it includes leisure, entertainment, manufacturing, recreation, war, and exercise",
        "ozone Depletion 101":"Far above Earth's surface, the ozone layer helps to protect life from harmful ultraviolet radiation. Learn what CFCs are, how they have contributed to the ozone hole, and how the 1989 Montreal Protocol sought to put an end to ozone depletion.",
        "smog":"The tallest towers of Shanghai, China, rise above the haze. Shanghai's smog is a mixture of pollution from coal, the primary source of energy for most homes and businesses in the region, as well as emissions from vehicles.",
        "prevailing Winds":"Winds occur where high-pressure air masses seek low-pressure areas. Prevailing winds are largely predictable and named for broad areas of the Earth over which they form. Convection cells circulate air flow and help regulate temperature around the globe.",
        "earth":"Earth is the planet we live on, the third of eight planets in our solar system and the only known place in the universe to support life..........The spectacular image is focused on eastern Africa and Asia's Indian subcontinent. In addition to the dark blue of the Indian Ocean, the lighter blue of east Africa's Great Lakes are also visible. The Nile, the world's longest river, can be seen snaking its way to a fertile green delta near where east Africa meets the Arabian Peninsula. The continental islands of Madagascar (off the southern coast of Africa) and Sri Lanka (off the southern coast of India) are also clearly visible.",
        "ozone Layer":"The ozone layer is one layer of the stratosphere, the second layer of Earth’s atmosphere. The stratosphere is the mass of protective gases clinging to our planet............",
        "parts of the Atmosphere":"We live at the bottom of an invisible ocean called the atmosphere, a layer of gases surrounding our planet. Nitrogen and oxygen account for 99 percent of the gases in dry air, with argon, carbon dioxide, helium, neon, and other gases making up minute portions.",
        "sea Storm":"Air masses are large volumes of air that have generally the same temperature and pressure. Unstable air masses have different temperatures and pressures. Unstable air masses, like this one over the North Sea in Germany, can produce storms.",
        "air mass":"An air mass is a large volume of air in the atmosphere that is mostly uniform in temperature and moisture. Air masses can extend thousands of kilometers in any direction, and can reach from ground level to the stratosphere—16 kilometers (10 miles) into the atmosphere.",
         "atmosphere information":"One of the main components of Earth's interdependent physical systems is the atmosphere. An atmosphere is made of the layers of gases surrounding a planet or other celestial body. Earth's atmosphere is composed of about 78% nitrogen, 21% oxygen, and one percent other gases.",
         "non-renewable resources":"   Non-renewable resources are the resources that get exhausted with their extraction and use.  Examples: Coal, petroleum, iron ore, etc.",
         "renewable and Non":" Renewable resources are the resources that can never be exhausted or depleted with continuous use.There remains a continuous supply of renewable resources.  Examples: Water, trees, etc.",
         "environment functions":" Provides the supply of resources----2-- Sustains life---3Assimilates waste---4--Enhances the quality of life",
        "environment":"Environment can be defined as a sum total of all the living and non-living elements and their effects that influence human life. While all living or biotic elements are animals, plants, forests, fisheries, and birds, non-living or abiotic elements include water, land, sunlight, rocks, and air.",
        "river":"A river is a natural flowing watercourse, usually a freshwater stream, flowing on the Earth's land surface or inside caves towards another waterbody at a lower elevation, such as an ocean, sea, bay, lake, wetland, or another river. In some cases, a river flows into the ground or becomes dry at the end of its course without reaching another body of water. Small rivers can be referred to by names such as creek, brook, and rivulet. There are no official definitions for the generic term river as applied to geographic features,[1] although in some countries or communities, a stream is defined by its size. Many names for small rivers are specific to geographic location; examples are",
        "nature":"Nature is all the animals, plants, and other things in the world that are not made by people, and all the events and processes that are not caused by people. The most amazing thing about nature is its infinite variety. ... grasses that grow wild in nature.",
        "arun":"I LOVE YOU ARUN",
        "tree":"Trees are an essential resource for everyone. They provide habitat for various species, clean the air and produce oxygen. Besides, they give us shade in the summer, and their leaves can be used for numerous purposes, such as making perfumes, medicines, etc. Moreover, they help cool our atmosphere.",
        "animal":"An animal is a living creature such as a dog, lion, or rabbit, rather than a bird, fish, insect, or human being. He was attacked by wild animals. He had a real knowledge of animals, birds and flowers. Synonyms: creature, beast, brute More Synonyms of animal.",
        "environment":"Environment plays an important role in healthy living and the existence of life on planet earth. Earth is a home for different living species and we all are dependent on the environment for food, air, water, and other needs. Therefore, it is important for every individual to save and protect our environment.",
        "sonali":"hi ARUN",
        "what is environment":"The environment refers to the surroundings in which life exists on earth. Components like animals, humans, sunlight, water, trees, and air make up the environment. They are the earth's living and non-living components. Living organisms include trees, humans, and animals.",
        "about environment":"Environment means what surrounds us. It may be living or non-living things. It includes physical, chemical and other natural forces.",
        "natural environment":"Environment includes the living and non-living things that an organism interacts with, or has an effect on it. Living elements that an organism interacts with are known as biotic elements: animals, plants, etc",
        "environment":"Environment means what surrounds us. It may be living or non-living things. It includes physica",
        "hi":"hiiiii",
        "hii":"hiiiii",
        "hiii":"hiiiii",
        "hiiii":"hiiiii sir",
        "what is en":"The environment refers to the surroundings in which life exists on earth. Components like animals, humans, sunlight, water, trees, and air make up the environment. They are the earth's living and non-living components. Living organisms include trees, humans, and animals.",
        "hello": "Hi there! How can I help you?",
        "i am fine":"have a good day",
        "how are you": "i am fine an you, but thanks for asking!",
        "bye": "Goodbye! Have a great day.",
        "default": "I'm sorry, I don't understand that. Can you please try again?"
    };
    // Check if the user input matches any predefined responses
    for (const key in responses) {
        if (userInput.includes(key)) {
            return responses[key];
        }
    }

    // Default response if no match is found
    return responses["default"];
}