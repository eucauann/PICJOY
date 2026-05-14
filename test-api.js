fetch("https://orbitalflow.com.br/api/public/intake/82551844369f4aa6ad912c5b684ba871", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Teste Auditoria",
    email: "teste@auditoria.com",
    phone: "11999999999",
    source: "Landing Page PicJoy"
  })
}).then(async res => {
  console.log("Status:", res.status);
  const text = await res.text();
  console.log("Body:", text);
}).catch(console.error);
