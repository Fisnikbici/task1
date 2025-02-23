import domains from "./navdata";

const DomainList = () => {
    return (
      <div className="domain-list">
        {domains.map((domain, index) => (
          <div className="Card" key={index}>
            <div className="Icon" >
                {domain.icon} 
                </div>
              <div className="Title-decription">
                <div className="TITLE">
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
