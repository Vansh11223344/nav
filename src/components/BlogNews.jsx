import React, { useState, useEffect, useRef } from 'react';
import './BlogNews.css';
import { Helmet } from 'react-helmet-async';


const initialArticles = [
  { 
    id: 1, 
    title: "EV Policy Update: New Subsidies Announced", 
    category: "ev policy", 
    content: "The government has announced new subsidies to boost EV adoption across rural India. These incentives will significantly reduce upfront costs for 2W and 3W electric vehicles.", 
    featured: true,
    date: "June 15, 2023"
  },
  { 
    id: 2, 
    title: "Rural Tech Innovations in EV Maintenance", 
    category: "industry trends", 
    content: "Innovations in rural EV maintenance are making diagnostics more accessible. Our new portable toolkit enables basic troubleshooting without internet connectivity.", 
    featured: false,
    date: "May 28, 2023"
  },
  { 
    id: 3, 
    title: "Navyug Launches New Skilling Program", 
    category: "navyug updates", 
    content: "Our new skilling program aims to train 1000 rural technicians this year. The 6-week intensive course covers EV fundamentals and practical diagnostics.", 
    featured: false,
    date: "May 10, 2023"
  },
  { 
    id: 4, 
    title: "Case Study: Diagnostic Kits in Action", 
    category: "case studies", 
    content: "A step-by-step guide for rural mechanics to use our diagnostic kits effectively. Learn to interpret error codes and perform basic troubleshooting.", 
    featured: false,
    date: "April 22, 2023"
  }
];

const categories = [
  "all",
  "Product Updates",
  "Industry trends",
  "case studies",
  "navyug updates",
  "ev policy"
];

const BlogNews = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [filter, setFilter] = useState('all');
  const [form, setForm] = useState({ 
    title: '', 
    category: 'ev policy', 
    content: '', 
    featured: false,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  });
  const [isAdding, setIsAdding] = useState(false);

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [login, setLogin] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Video refs for Intersection Observer
  const videoRefs = useRef([]);

  // Normalize category strings for filtering
  const normalize = str => str.toLowerCase();

  const filteredArticles = filter === 'all' 
    ? articles 
    : articles.filter(a => normalize(a.category) === normalize(filter));

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
        category: 'ev policy', 
        content: '', 
        featured: false,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      });
      setIsAdding(false);
      document.getElementById(`article-${newArticle.id}`)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 800);
  };

  // Login logic
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      login.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
      login.password === ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  // Persist authentication across reloads
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth) setIsAuthenticated(true);
  }, []);

  // Animate articles on scroll
  useEffect(() => {
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

  // Autoplay videos when they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(err => console.log('Video play failed:', err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible (approx. centered)
    );

    videoRefs.current.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach(video => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="blognews-container">
      <Helmet>
        <title>Blog News | Navyug Innovations</title>
      </Helmet>
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
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
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

      {/* Full-width videos */}
      <div className="blognews-videos-wrapper">
        <video
          className="blognews-video"
          ref={el => (videoRefs.current[0] = el)}
          src="./videos/blogclip1.mp4"
          muted
          loop
          playsInline
          poster="./images/test2.jpeg"
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
        <video
          className="blognews-video"
          ref={el => (videoRefs.current[1] = el)}
          src="./videos/blogclip2.mp4"
          muted
          loop
          playsInline
          poster="./images/test1.jpeg"
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  );
};

export default BlogNews;