import {Groq} from "groq-sdk"
const GROQ_API = import.meta.env.VITE_GROQ;

const groq = new Groq({
    apiKey: GROQ_API,
    dangerouslyAllowBrowser: true
});

export const requestToGroqAi = async (content) => {
    const reply = await groq.chat.completions.create({
        messages: [{
            role: 'user',
            content,
        }],
        model: 'llama3-8b-8192',
    })

    const replay = reply.choices[0].message.content;
    return replay;
};