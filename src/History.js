const History = () => {

    async function getData(url = '') {

        const response = await fetch(url).then(response => response.json());
        return response;

      

    }

    const messages = getData("http://localhost:4000/messages");

    console.log(messages);


    return (

        <div>

            {/* {messages.map((message) => (

                <p>{message.message}</p>

            ))} */}



        </div>

    );
}

export default History;