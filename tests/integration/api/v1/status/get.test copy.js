// Teste com função assincrona:
test("Teste de SQL Injection", async () => {
  await fetch("http://localhost:3000/api/v1/status");
});
