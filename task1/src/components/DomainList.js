
import domains from "./navdata";

const DomainList = () => {
    return (
      <div className="domain-list">
        {domains.map((domain, index) => (
          <div className="Card" key={index}>
            
            <div className="Icon-wrapper">
              <div className="Icon">
                {domain.icon} 
              </div>
            </div>
            <div className="Title-description">
              <div className="Title">
                <h2>{domain.title}</h2>
              </div>
              <div className="description">
                <p>{domain.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default DomainList;

