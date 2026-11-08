export default async function handler(request, response) {

    if (request.method !== "POST") {
        return response.status(405).json({
            error: "Method not allowed."
        });
    }


    const { question } = request.body;


    if (!question || question.trim() === "") {
        return response.status(400).json({
            error: "Please enter a question."
        });
    }


    try {

        const aiResponse = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Authorization":
                        `Bearer ${process.env.OPENROUTER_API_KEY}`,

                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    model: "openrouter/free",

                    messages: [
                        {
                            role: "user",
                            content: question
                        }
                    ]
                })
            }
        );


        if (!aiResponse.ok) {

            const errorText =
                await aiResponse.text();

            console.error(errorText);

            return response.status(500).json({
                error:
                    "The AI request failed."
            });
        }


        const data =
            await aiResponse.json();


        const answer =
            data.choices?.[0]?.message?.content;


        if (!answer) {

            return response.status(500).json({
                error:
                    "No answer was returned."
            });
        }


        return response.status(200).json({
            answer: answer
        });


    } catch (error) {

        console.error(error);


        return response.status(500).json({
            error:
                "Something went wrong."
        });
    }
}
