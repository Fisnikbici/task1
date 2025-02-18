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
                  <h1>{domain.title}</h1>
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
