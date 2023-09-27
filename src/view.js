// estas funciones son de ejemplo
//aca disenamos la tarjeta

export const renderItems = (data) => {
  console.log(renderItems)
  //crear lista de Lis
  const ulElement= document.createElement('ul');
  ulElement.setAttribute("id", "tarjetas");
  console.log(ulElement)
  //Recorrer objeto
  data.forEach((pokemon) => {
    //crear el elemento Li
    const liElement = document.createElement("li");
    liElement.innerHTML = 
    `<div class="card">
        <div class="card-side front">
          <div><img src="${pokemon.img}" alt="${pokemon.name}"></div>
        </div>
        <div class="card-side back">
          <div>
          <dl itemscope itemtype="pokemon">
          <dt>Nombre:</dt>
          <dd itemprop="name">${pokemon.name}</dd>
          <dt>Número:</dt>
          <dd itemprop="num">${pokemon.num}</dd>
          <dt>Tipo:</dt>
          <dd itemprop="type">${pokemon.type}</dd>
          <dt>Altura:</dt>
          <dd itemprop="height">${pokemon.size.height}</dd>
          <dt>Peso:</dt>
          <dd itemprop="weight">${pokemon.size.weight}</dd>
        </dl>
          </div>
        </div>
    </div>`
    
    /* `
    <img src="${pokemon.img}" alt="${pokemon.name}">
    <dl itemscope itemtype="pokemon">
      <dt>Nombre:</dt>
      <dd itemprop="name">${pokemon.name}</dd>
      <dt>Número:</dt>
      <dd itemprop="num">${pokemon.num}</dd>
      <dt>Tipo:</dt>
      <dd itemprop="type">${pokemon.type}</dd>
      <dt>Altura:</dt>
      <dd itemprop="height">${pokemon.size.height}</dd>
      <dt>Peso:</dt>
      <dd itemprop="weight">${pokemon.size.weight}</dd>
    </dl>
    `; */
    ulElement.appendChild(liElement);
  });
  ulElement.classList.add("tarjetas");
  return ulElement;
};
