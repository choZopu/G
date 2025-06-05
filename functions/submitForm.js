// netlify/functions/submitForm.js
export async function handler(event, context) {
  const body = JSON.parse(event.body);
  const res = await fetch("https://script.google.com/macros/s/AKfycbwItSxicK6OAxbydCxMULcmB4fcYWsXCopfiEn3elSGj8pHIMztZ9ote0rZ1Jtx6JJt/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const result = await res.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(result)
  };
}
