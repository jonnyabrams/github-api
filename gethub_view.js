class GethubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        this.display(repoData);
      });
    });
  }

  display(data) {
    const repoName = document.querySelector('#repo-name');
    const repoDescription = document.querySelector('#repo-description');
    const repoImage = document.querySelector('#image');
 
    repoName.textContent = data.name;
    repoDescription.textContent = data.description;
    repoImage.src = data.organization.avatar_url;
  }
}

module.exports = GethubView;