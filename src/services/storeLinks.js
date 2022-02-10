
// Buscar os links salvos.
export async function getLinksSave(key){
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}



// Salvar um link no local storage.
export async function saveLink(key, newLink){
  let linksStored = await getLinksSave(key);

  // Verificar se já tem um link salvo e não deixar duplicar
  const hasLink = linksStored.some( link => link.id === newLink.id);

  if(hasLink){
    console.log('Esse link já existe na sua lista!');
    return;
  }

  // Adicionar novo link na lista
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log('link salvo com sucesso!');
}

// Deletar algum link salvo.
export function deleteLink(links, id){
  let myLinks = links.filter( item => {
    return (item.id !== id)
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  alert('Link deletado com sucesso!')

  return myLinks;
}