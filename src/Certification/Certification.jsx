import styles from './CertificationsStyles.module.css';

function Certifications() {
  return (
    <section id="certifications" className={styles.container}>
      <h1 className="sectionTitle">Certifications</h1>
      <p className={styles.description}>
        
      </p>
      <div className={styles.certificationsGrid}>
        <div className={styles.certificationCard}>
          <h3>INFORMATION TECHNOLOGY SPECIALIST</h3>
          <h4>Network Security <span>July 12, 2023</span></h4>
          <p>
            It covers secure communication protocols, intrusion detection systems, and risk mitigation strategies
            tailored to modern transportation networks, preparing professionals to tackle cybersecurity threats
            effectively.
          </p>
        </div>
        <div className={styles.certificationCard}>
          <h3>INFORMATION TECHNOLOGY SPECIALIST</h3>
          <h4>Networking <span>July 13, 2023</span></h4>
          <p>
            It covers areas such as network architecture, protocols, security measures, and troubleshooting techniques.
            This certification enables individuals to excel in roles related to network administration, cybersecurity,
            and infrastructure management.
          </p>
        </div>
        
        <div className={styles.certificationCard}>
          <h3>Modular Trainingfor Web
Design HTML and CSS UIC
</h3>
          <h4>CSS <span>March 05, 2020</span></h4>
          <p>
            It's a vocational course that equips individuals with skills in installing, configuring, and maintaining
            computer systems and networks. This certification program covers a range of topics including hardware and
            software troubleshooting, network setup, and basic programming.
          </p>
        </div>
        <div className={styles.certificationCard}>
          <h3>Basic Programming Dev C++
Using Bloodshed/Orwell
</h3>
          <h4>Progrograming <span>December, 2016</span></h4>
          <p>
          a full-featured C and C++ Integrated Development Environment (IDE) for Windows platforms. Millions of developers, students and researchers use Dev-C++ since the first version was released in 1998. 
          It has been featured in dozens of C++ and scientific books 
          and remains one of the favorite learning tool among universities & schools worldwide.
          </p>
        </div>
        
      </div>

    </section>
  );
}

export default Certifications;
