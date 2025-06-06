import React, { useState } from 'react';
import './BlogNews.css';

const initialArticles = [
  { id: 1, title: "EV Policy Update: New Subsidies Announced", category: "EV Policy", content: "The government has announced new subsidies to boost EV adoption across rural India.", featured: true },
  { id: 2, title: "Rural Tech Innovations in EV Maintenance", category: "Rural Tech", content: "Innovations in rural EV maintenance are making diagnostics more accessible.", featured: false },
  { id: 3, title: "Navyug Launches New Skilling Program", category: "Navyug Updates", content: "Our new skilling program aims to train 1000 rural technicians this year.", featured: false },
  { id: 4, title: "DIY Skilling: How to Use Diagnostic Kits", category: "DIY Skilling", content: "A step-by-step guide for rural mechanics to use our diagnostic kits effectively.", featured: false }
];

const categories = ["All", "EV Policy", "Rural Tech", "Navyug Updates", "DIY Skilling"];

const BlogNews = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [filter, setFilter] = useState('All');
  const [form, setForm] = useState({ title: '', category: 'EV Policy', content: '', featured: false });

  const filteredArticles = filter === 'All' ? articles : articles.filter(a => a.category === filter);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleAddArticle = (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return;
    const newArticle = {
      id: articles.length + 1,
      title: form.title,
      category: form.category,
      content: form.content,
      featured: form.featured
    };
    setArticles([newArticle, ...articles]);
    setForm({ title: '', category: 'EV Policy', content: '', featured: false });
  };

  const featuredArticle = articles.find(a => a.featured);

  return (
    <div className="blognews-container">
      <h1 className="blognews-title">Navyug Blog & News</h1>

      {featuredArticle && (
        <section className="featured-article">
          <h2>Featured Article</h2>
          <h3>{featuredArticle.title}</h3>
          <p>{featuredArticle.content}</p>
        </section>
      )}

      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn ${filter === cat ? 'gold active' : 'gold'}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="articles-list">
        {filteredArticles.length === 0 ? (
          <p>No articles found in this category.</p>
        ) : (
          filteredArticles.map(article => (
            <article key={article.id} className="article-card">
              <h3>{article.title}</h3>
              <span className="article-category">{article.category}</span>
              <p>{article.content}</p>
            </article>
          ))
        )}
      </section>

      <section className="add-article">
        <h2>Add New Article</h2>
        <form onSubmit={handleAddArticle}>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Category
            <select name="category" value={form.category} onChange={handleInputChange}>
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
              rows={4}
              required
            />
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleInputChange}
            />
            Mark as Featured
          </label>
          <button type="submit" className="btn gold">Add Article</button>
        </form>
      </section>
    </div>
  );
};

export default BlogNews;
