import React, { useState, useEffect } from 'react';
import './BlogNews.css';

const initialArticles = [
  { 
    id: 1, 
    title: "EV Policy Update: New Subsidies Announced", 
    category: "EV Policy", 
    content: "The government has announced new subsidies to boost EV adoption across rural India. These incentives will significantly reduce upfront costs for 2W and 3W electric vehicles.", 
    featured: true,
    date: "June 15, 2023"
  },
  { 
    id: 2, 
    title: "Rural Tech Innovations in EV Maintenance", 
    category: "Rural Tech", 
    content: "Innovations in rural EV maintenance are making diagnostics more accessible. Our new portable toolkit enables basic troubleshooting without internet connectivity.", 
    featured: false,
    date: "May 28, 2023"
  },
  { 
    id: 3, 
    title: "Navyug Launches New Skilling Program", 
    category: "Navyug Updates", 
    content: "Our new skilling program aims to train 1000 rural technicians this year. The 6-week intensive course covers EV fundamentals and practical diagnostics.", 
    featured: false,
    date: "May 10, 2023"
  },
  { 
    id: 4, 
    title: "DIY Skilling: How to Use Diagnostic Kits", 
    category: "DIY Skilling", 
    content: "A step-by-step guide for rural mechanics to use our diagnostic kits effectively. Learn to interpret error codes and perform basic troubleshooting.", 
    featured: false,
    date: "April 22, 2023"
  }
];

const categories = ["All", "EV Policy", "Rural Tech", "Navyug Updates", "DIY Skilling"];

const BlogNews = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [filter, setFilter] = useState('All');
  const [form, setForm] = useState({ 
    title: '', 
    category: 'EV Policy', 
    content: '', 
    featured: false,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  });
  const [isAdding, setIsAdding] = useState(false);

  const filteredArticles = filter === 'All' 
    ? articles 
    : articles.filter(a => a.category === filter);

  const featuredArticle = articles.find(a => a.featured);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleAddArticle = (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return;
    
    setIsAdding(true);
    
    const newArticle = {
      id: articles.length + 1,
      title: form.title,
      category: form.category,
      content: form.content,
      featured: form.featured,
      date: form.date
    };
    
    // Simulate async operation
    setTimeout(() => {
      setArticles([newArticle, ...articles]);
      setForm({ 
        title: '', 
        category: 'EV Policy', 
        content: '', 
        featured: false,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      });
      setIsAdding(false);
      
      // Scroll to the new article
      document.getElementById(`article-${newArticle.id}`)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 800);
  };

  useEffect(() => {
    // Scroll animation trigger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.article-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [articles]);

  return (
    <div className="blognews-container">
      <h1 className="blognews-title">Navyug Insights</h1>

      {featuredArticle && (
        <section className="featured-article">
          <h2>Featured Story</h2>
          <h3>{featuredArticle.title}</h3>
          <p>{featuredArticle.content}</p>
          <div className="article-date">{featuredArticle.date}</div>
        </section>
      )}

      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="articles-list">
        {filteredArticles.length === 0 ? (
          <p className="no-articles">No articles found in this category.</p>
        ) : (
          filteredArticles.map(article => (
            <article 
              key={article.id} 
              className="article-card"
              id={`article-${article.id}`}
            >
              <h3>{article.title}</h3>
              <div className="article-meta">
                <span className="article-category">{article.category}</span>
                <span className="article-date">{article.date}</span>
              </div>
              <p>{article.content}</p>
            </article>
          ))
        )}
      </section>

      <section className="add-article">
        <h2>Share Your Story</h2>
        <form onSubmit={handleAddArticle}>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleInputChange}
              required
              placeholder="Enter article title"
            />
          </label>
          <label>
            Category
            <select 
              name="category" 
              value={form.category} 
              onChange={handleInputChange}
            >
              {categories.filter(c => c !== 'All').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>
          <label>
            Content
            <textarea
              name="content"
              value={form.content}
              onChange={handleInputChange}
              rows={6}
              required
              placeholder="Write your article content here..."
            />
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleInputChange}
            />
            Mark as Featured Story
          </label>
          <button 
            type="submit" 
            className="btn active"
            disabled={isAdding}
          >
            {isAdding ? 'Publishing...' : 'Publish Article'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default BlogNews;