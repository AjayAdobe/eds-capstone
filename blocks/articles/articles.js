export default async function decorate(block) {
  const articleLists = block.querySelector('a[href$=".json"]');
  async function loadArticles() {
    const resp = await fetch(articleLists.href);
    const json = await resp.json();
    json.data.forEach((row) => {
      // Null checks for required fields
      if (row.url && row.image && row.name && row.description) {
        // Create the elements
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article-item');
        articleDiv.innerHTML = `
          <a href="${row.url}">
              <img src="${row.image}" alt="${row.name}">
              <h3>${row.name}</h3>
          </a>
          <p>${row.description}</p>
        `;
        block.appendChild(articleDiv);
      } else {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.textContent = 'Something Went Wrong';
        block.appendChild(errorDiv);
      }
    });
  }
  if (articleLists) {
    loadArticles();
  }
}
