
import React from 'react';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

export default function ServiceList({ services }) {
  return (
    <div className={styles.serviceList}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceCard}>
          {service.image && (
            <div className={styles.serviceImage}>
              <img src={service.image} alt={service.name} />
            </div>
          )}
          <div className={styles.serviceContent}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {service.url && (
              <a href={service.url} target="_blank" rel="noopener noreferrer" className={styles.serviceLink}>
                <Translate id="service.viewDetails">View details</Translate>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
