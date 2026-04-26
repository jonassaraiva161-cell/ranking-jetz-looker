dscc.subscribeToData(draw, { transform: dscc.objectTransform });

function draw(data) {
  const container = document.body;

  container.innerHTML = `
    <div style="
      font-family: Arial, sans-serif;
      background: #111;
      color: white;
      padding: 24px;
      border-radius: 12px;
      text-align: center;
    ">
      <h2>Ranking conectado com sucesso</h2>
      <p>Os dados do Looker chegaram corretamente.</p>
    </div>
  `;

  console.log("Dados recebidos do Looker:", data);
}
