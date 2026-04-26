dscc.subscribeToData(draw, { transform: dscc.objectTransform });

function draw(data) {
  document.body.innerHTML = `
    <div style="
      font-family: Arial;
      padding: 20px;
      color: #fff;
      background: #111;
      text-align: center;
    ">
      <h2>Ranking conectado com sucesso</h2>
      <p>Os dados do Looker chegaram no componente.</p>
    </div>
  `;

  console.log("Dados recebidos do Looker:", data);
}
