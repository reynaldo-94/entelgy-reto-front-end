const getCountries = async(url) => { 
  const response = await fetch(url)
  return response.json()
}

const handleClickModal = (name, region, subRegion) => {
  document.getElementById('modal').style.display = 'block'
  document.getElementById('modalHeader').innerHTML = name
  document.getElementById('region').innerHTML = region
  document.getElementById('subRegion').innerHTML = subRegion
}

const handleClickClose = () => {
  document.getElementById('modal').style.display = 'none'
}

const handleFocusDiv = (divId) => {
  console.log('Countries')
  document.getElementById(divId).focus();
}


getCountries('https://restcountries.eu/rest/v2/lang/es')
  .then(data => {
    data.forEach(element => {
      document.getElementById('listCountries').innerHTML += 
      `<div 
        onClick="handleClickModal(name='${element.name}', region='${element.region}', subRegion='${element.subregion}')"
        style="align-items: center; cursor: pointer; display: flex; flex-direction: column; gap: 10px; padding: 10px;"
      >
        <img src=${element.flag} width=${150} style="display:flex; flex: 1;" />
        <div style="color: #256095; font-size: 25px; display:flex; flex: 1;">${element.name}</div>
      </div>`
    });    
  })

