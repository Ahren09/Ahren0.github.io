fetch('/news.json')
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById('news-container');
    data.forEach(pub => {
      const element = document.createElement('div');
      // const authors = pub.authors.map(author =>
      //   author === "Yiqiao Jin" ? `<b>${author}</b>` : author
      // ).join(', ');

      // let presentationTypeHtml = pub.presentationType ? `(${pub.presentationType})` : '';

      // let acceptanceRate = pub.acceptanceRate ? `Acceptance rate: ${pub.acceptanceRate}` : '';

      // let venue = pub.venueShort ? `<i>In ${pub.venue} (${pub.venueShort})</i>` : `<i>${pub.venue}</i>`;

      // let arxivLink = pub.arXiv ? `[<a href="${pub.arXiv}">arXiv</a>]` : '';
      // let paperLink = pub.paperLink ? `[<a href="${pub.paperLink}">Paper</a>]` : '';
      // let websiteLink = pub.website ? `[<a href="${pub.website}">Website</a>]` : '';
      // let codeLink = pub.GitHub ? `[<a href="${pub.GitHub}">Code</a>]` : '';

      // let links = [arxivLink, paperLink, websiteLink, codeLink].filter(link => link !== '').join(' ');


      // element.innerHTML = `<p>${authors}</p><p>${venue} ${presentationTypeHtml}</p><p>${links}</p>`;
      element.innerHTML = `<p>hey</p>`;
      // Add more details as needed
      newsContainer.appendChild(element);
    });
  })
  .catch(error => console.error('Error loading news:', error));
