function ProjectCard() {
  const progressObj = [
    {
      text: "Server Migration",
      percent: "20%",
      color: "danger",
    },
    {
      text: "Sales Tracking",
      percent: "40%",
      color: "warning",
    },
    {
      text: "Customer Database",
      percent: "60%",
      color: "primary",
    },
    {
      text: "Payout Details",
      percent: "80%",
      color: "info",
    },
    {
      text: "Account Setup",
      percent: "Completed!",
      color: "success",
    },
  ];

  const colorObj = [{
    text: 'Primary',
    color: '#4e73df'
  },{
    text: 'Success',
    color: '#1cc88a'
  },{
    text: 'Info',
    color: '#36b9cc'
  },{
    text: 'Warning',
    color: '#f6c23e'
  },{
    text: 'Danger',
    color: '#e74a3b'
  },{
    text: 'Secondary',
    color: '#858796'
  },{
    text: 'Light',
    color: '#f8f9fc'
  },{
    text: 'Dark',
    color: '#5a5c69'
  }];




  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
          </div>
          <div className="card-body">
            {progressObj.map((item, index) => {
              const width =
                item.percent === "Completed!" ? "100%" : item.percent;
              return (
                <>
                  <h4 key={index} className="small font-weight-bold">
                    {item.text}{" "}
                    <span className="float-right">{item.percent}</span>
                  </h4>
                  <div className="progress mb-4">
                    <div
                      className={`progress-bar bg-${item.color}`}
                      role="progressbar"
                      style={{ width: width }}
                      aria-valuenow={item.percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="row">
          {colorObj.map((item, index) => {
            const textColor = item.text === 'Light'? 'black' : 'white';
            return (
              <div key={index} className="col-lg-6 mb-4">
                <div className={`card bg-${item.text.toLowerCase()} text-${textColor} shadow`}>
                  <div className="card-body">
                    {item.text}
                    <div className={`text-${textColor}-50 small`}>{item.color}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "25rem" }}
                src="img/undraw_posting_photo.svg"
                alt="..."
              />
            </div>
            <p>
              Add some quality, svg illustrations to your project courtesy of{" "}
              <a target="_blank" rel="nofollow" href="https://undraw.co/">
                unDraw
              </a>
              , a constantly updated collection of beautiful svg images that you
              can use completely free and without attribution!
            </p>
            <a target="_blank" rel="nofollow" href="https://undraw.co/">
              Browse Illustrations on unDraw &rarr;
            </a>
          </div>
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Development Approach
            </h6>
          </div>
          <div className="card-body">
            <p>
              SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees
              in order to reduce CSS bloat and poor page performance. Custom CSS
              classNamees are used to create custom components and custom
              utility classNamees.
            </p>
            <p className="mb-0">
              Before working with this theme, you should become familiar with
              the Bootstrap framework, especially the utility classNamees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
