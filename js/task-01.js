const categories = document.querySelectorAll('#categories .item');
    
      const numberOfCategories = categories.length;
    
      console.log('Number of categories:', numberOfCategories);
    
      categories.forEach(category => {
        const categoryName = category.querySelector('h2').textContent;
    
        const categoryElements = category.querySelectorAll('ul > li');
    
        const numberOfElements = categoryElements.length;
    
        console.log(`\nCategory: ${categoryName}`);
        console.log(`Elements: ${numberOfElements}`);
      });