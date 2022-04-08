class GethubModel {
  constructor() {
    this.repoInfo = null
  }

  setRepoInfo(repoInfo) {
    this.repoInfo = repoInfo;
  }

  getRepoInfo() {
    return this.repoInfo;
  }
}

module.exports = GethubModel;