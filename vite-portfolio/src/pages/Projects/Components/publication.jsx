import './publication.css'

export default function PublicationLine({ tag, title, authors, conference, link }) {
  return (
    <div className="publication-line">
      <div className="publication-info">
        <h3>{title}</h3>
        <p className="authors">{authors}</p>
        <p className="conference">{conference}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="link">
          Read More
        </a>
      </div>
    </div>
  );
}