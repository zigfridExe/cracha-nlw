const linksSocialMedia = {
  youtube: 'Zigsam',
  github: 'zigfridExe',
  instagram: 'zigsam.exe',
  facebook: 'everton.romansini',
  twitter: 'zigsam'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`

  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    //Utilizando o DOM estude sobre isso!!
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
    
  }


getGithubProfileInfos()


