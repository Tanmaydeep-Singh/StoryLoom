import Accordia from "./Accordian";

const AccordianData =
    [{
        "id": 1,
        "question": "What is the purpose of this story website?",
        "answer": "The story website is designed to provide users with engaging short stories in various languages. It aims to enhance the reading experience by offering translation features and interactive elements, such as translating individual words on hover and providing audio playback of stories in an advanced version."
    },
    {
        "id": 2,
        "question": "How can I contribute my own story to the website?",
        "answer": "Currently, we are focusing on integrating stories through APIs. However, we plan to introduce a feature that allows users to submit their own stories in the future. Stay tuned for updates on how you can share your creative work with our community!"
    },
    {
        "id": 3,
        "question": "What features does this website offer to enhance my reading experience?",
        "answer": "The website offers several features to enhance your reading experience, including: 1) Fetching and displaying short stories. 2) Translating stories into various languages. 3) Hover-to-translate functionality for individual words. 4) Audio playback of stories in the advanced version."
    },
    {
        "id": 4,
        "question": "How does the website handle different languages and translations?",
        "answer": "The website uses APIs to handle language translations. Users can select their preferred language, and the website will automatically translate the story text accordingly. Additionally, individual words can be translated on hover to assist with language learning and comprehension."
    }];



interface accordian {
    id: number,
    question: string,
    answer: string
}

const FAQ = () => {
    return (
        <div className="mt-8 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                FAQ
            </h1>
            {AccordianData.map((data) => (
                <Accordia key={data.id} question={data.question} answer={data.answer} />
            ))}
        </div>

    )
}

export default FAQ;