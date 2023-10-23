import React, { useState } from 'react';
import styles from './Project.module.css';
import 'font-awesome/css/font-awesome.min.css';

const ProjectSection = () => {
  const [selectedTab, setSelectedTab] = useState('images');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <div className={styles.container}>
      <h1>Our Projects</h1>
      <div className={styles.tabs}>
        <button onClick={() => handleTabChange('images')}>
          <i className="fa fa-picture-o" /> View Photos
        </button>
        <button onClick={() => handleTabChange('videos')}>
          <i className="fa fa-video-camera" /> View Videos
        </button>
      </div>

      <div className={styles.content}>
        {selectedTab === 'images' && (
          <div className={styles.imageSection}>
            <h2>Latest Photos</h2>
            <div className={styles.imageCardsContainer}>
              {/* Add your image cards here */}
              <div className={`${styles.card} ${styles.imageCard}`}>
              <div className={styles.label}>Events</div>
                <img src="/images/indoor.jpg" alt="Image 1" />
              </div>
              <div className={`${styles.card} ${styles.imageCard}`} data-label="Outdoor">
              <div className={styles.label}>Outdoor</div>
                <img src="/images/videography.jpg" alt="Image 2" />
              </div>
              <div className={`${styles.card} ${styles.imageCard}`} data-label="Outdoor">
              <div className={styles.label}>Outdoor</div>
                <img src="/images/videography.jpg" alt="Image 3" />
              </div>
              <div className={`${styles.card} ${styles.imageCard}`} data-label="Outdoor">
              <div className={styles.label}>Outdoor</div>
                <img src="/images/videography.jpg" alt="Image 4" />
              </div>
              <div className={`${styles.card} ${styles.imageCard}`} data-label="Outdoor">
              <div className={styles.label}>Outdoor</div>
                <img src="/images/videography.jpg" alt="Image 6" />
              </div>
              <div className={`${styles.card} ${styles.imageCard}`} data-label="Outdoor">
              <div className={styles.label}>Outdoor</div>
                <img src="/images/videography.jpg" alt="Image 7" />
              </div>
              <div className={`${styles.card} ${styles.imageCard}`} data-label="Outdoor">
              <div className={styles.label}>Outdoor</div>
                <img src="/images/videography.jpg" alt="Image 8" />
              </div>
              <div className={`${styles.card} ${styles.imageCard}`} data-label="Outdoor">
              <div className={styles.label}>Outdoor</div>
                <img src="/images/videography.jpg" alt="Image 9" />
              </div>
              <div className={`${styles.card} ${styles.imageCard}`} data-label="Outdoor">
              <div className={styles.label}>Outdoor</div>
                <img src="/images/videography.jpg" alt="Image 10" />
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'videos' && (
          <div className={styles.videoSection}>
            <h2>Latest Videos</h2>
            <div className={styles.videoCardsContainer}>
              {/* Add six video cards here */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className={`${styles.card} ${styles.videoCard}`}
                  onClick={openVideoModal}
                  data-label={`Video ${index}`}
                >
                  <video className={styles.videoElement} width="320" height="240" controls>
                    <source
                      src="https://drive.google.com/file/d/1jsizW_k4i8pVSgZGJ6soFqMn9gwsmPCK/view"
                      type="video/mp4"
                    />
                  </video>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className={styles.modal} onClick={closeVideoModal}>
          <div className={styles.modalContent}>
            {/* Add video modal content here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSection;
