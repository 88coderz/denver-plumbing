'use client';

import React from 'react';
import styles from './Services.module.css';
import { FaTools, FaFaucet, FaWater, FaExclamationTriangle, FaWrench, FaToilet, FaHome, FaBuilding, FaUserTie, FaFileInvoiceDollar, FaStar } from 'react-icons/fa';

const services = [
  {
    title: 'Emergency Plumbing',
    description: '24/7 emergency services for all your plumbing needs.',
    icon: <FaExclamationTriangle />,
  },
  {
    title: 'Drain Cleaning',
    description: 'Expert drain cleaning to keep your pipes flowing smoothly.',
    icon: <FaWrench />,
  },
  {
    title: 'Water Heaters',
    description: 'Installation, repair, and maintenance of water heaters.',
    icon: <FaWater />,
  },
  {
    title: 'Leak Detection',
    description: 'Advanced leak detection to protect your home from water damage.',
    icon: <FaFaucet />,
  },
  {
    title: 'Pipe Repair',
    description: 'Comprehensive pipe repair and replacement services.',
    icon: <FaTools />,
  },
  {
    title: 'Toilet Repair',
    description: 'Repair and installation of all types of toilets and fixtures.',
    icon: <FaToilet />,
  },
  {
    title: 'Residential Plumbing',
    description: 'From leaky faucets to full-scale renovations, we provide reliable and efficient plumbing solutions for your home.',
    icon: <FaHome />,
  },
  {
    title: 'Commercial Plumbing',
    description: 'Our team is equipped to handle the complex plumbing needs of your business, ensuring minimal disruption to your operations.',
    icon: <FaBuilding />,
  },
];

const whyChooseUs = [
    {
      title: 'Experienced Professionals',
      description: 'Our team consists of highly trained and experienced plumbers who are dedicated to providing the best possible service.',
      icon: <FaUserTie />,
    },
    {
      title: 'Upfront Pricing',
      description: 'We believe in transparency. You will always receive a clear and upfront price before we begin any work.',
      icon: <FaFileInvoiceDollar />,
    },
    {
      title: 'Customer Satisfaction Guaranteed',
      description: 'Your satisfaction is our top priority. We stand behind our work and will not rest until you are completely satisfied.',
      icon: <FaStar />,
    },
  ];

const Services = () => {
  return (
    <section id="services" className={styles.servicesContainer}>
      <div className="container">
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>

        <h2 className={`${styles.title} mt-5`}>Why Choose Us?</h2>
      <div className={styles.grid}>
        {whyChooseUs.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
                {item.icon}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;
