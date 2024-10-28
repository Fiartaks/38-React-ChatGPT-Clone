// sendMsgToOpenAI.js
export const sendMsgToOpenAI = async (message) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ``, // API anahtarınızı buraya ekleyin
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo', 
      messages: [{ role: 'user', content: message }],
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return data.choices[0].message.content; 
  } else {
    console.error("API Error:", data); 
    return "Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin."; için
  }
};