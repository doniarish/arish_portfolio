const socialLinks = [
  { href: 'https://www.linkedin.com/in/arish-doni-s-652757351/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/doniarish',                        icon: 'fab fa-github',   label: 'GitHub' },
  { href: 'https://x.com/',                                      icon: 'fab fa-twitter',  label: 'Twitter' },
  { href: 'https://www.instagram.com/doniarish/',                icon: 'fab fa-instagram',label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        {socialLinks.map(({ href, icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <i className={icon}></i>
          </a>
        ))}
      </div>
      <p>&copy; 2025 Arish Doni S. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
