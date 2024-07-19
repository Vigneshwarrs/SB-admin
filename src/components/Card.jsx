function Card() {
  const CardObj = [
    {
      content: "Earnings (Monthly)",
      amount: "$40,000",
      icon: "fas fa-calendar",
      color: "primary"
    },
    {
      content: "Earnings (Annual)",
      amount: "$215,000",
      icon: "fas fa-dollar-sign",
      color: "success"
    },
    {
      content: "Task",
      amount: "50%",
      icon: "fas fa-clipboard-list",
      color: "info"
    },
    {
      content: "Pending Requests",
      amount: "18",
      icon: "fas fa-comments",
      color: "warning"
    },
  ];

  return (
    <div className="row">
      {CardObj.map((item, index) => {
        return (
        <div key={index} className="col-xl-3 col-md-6 mb-4">
          <div className={`card border-left-${item.color} shadow h-100 py-2`}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className={`text-xs font-weight-bold text-${item.color} text-uppercase mb-1`}>
                    {item.content}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {item.amount}
                  </div>
                </div>
                <div className="col-auto">
                  <i className={`${item.icon} fa-2x text-gray-300`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
}

export default Card;
