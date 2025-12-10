'use client';

import Link from 'next/link';
import { getBlogPosts } from '../../lib/data';
import { useEffect, useState } from 'react';
import styles from './ArticleCarousel.module.css';

interface Article {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
}

const ArticleCarousel = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            const fetchedArticles = await getBlogPosts();
            setArticles(fetchedArticles as Article[]);
        };

        fetchArticles();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current === articles.length - 1 ? 0 : current + 1));
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, [articles.length]);

    const nextSlide = () => {
        setActiveIndex((current) => (current === articles.length - 1 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setActiveIndex((current) => (current === 0 ? articles.length - 1 : current - 1));
    };

    if (articles.length === 0) {
        return <div>Loading articles...</div>;
    }

    return (
        <div className={styles.carouselWrapper}>
            <button onClick={prevSlide} className={styles.navButton}>&#10094;</button>
            <div className={styles.carouselContainer}>
                <div className={styles.carouselSlidesWrapper} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {articles.map((article) => (
                        <div key={article.id} className={styles.carouselSlide}>
                            <div className={styles.carouselCaption}>
                                <h3 className={styles.carouselTitle}>{article.title}</h3>
                                <p className={styles.carouselExcerpt}>{article.excerpt}</p>
                                <Link href={`/blogs/${article.slug}`} className={styles.carouselButton}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide} className={styles.navButton}>&#10095;</button>
        </div>
    );
};

export default ArticleCarousel;
