//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let classArray = []
        let subclassArray = []
        document.querySelector('h2').innerText = data.name
        document.querySelector('#description').innerText = data.desc.toString()

        data.classes.forEach(obj=>{
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('#classes').appendChild(li)
        })

        data.subclasses.forEach(obj=>{
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('#subclasses').appendChild(li)
        })
})}
        // for (i=0;i<data.classes.length;i++){
        //     holder= data.classes[i].name
        //     classArray.push(holder)
        //     document.querySelector('#classes').innerText = classArray.join(', ')
        // }
        // for (i=0;i<data.subclasses.length;i++){
        //     holder= data.subclasses[i].name
        //     subclassArray.push(holder)
        //     document.querySelector('#subclasses').innerText = subclassArray.join(', ')
        // }
//     }
// }
