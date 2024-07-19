function Table() {

    const tableObj = [
        {
            name: "Tiger Nixon",
            position: "System Architect",
            year: "2011/04/25",
            salary: "$320,800",
        },
        {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            year: "2009/10/09",
            salary: "$1,200,000",
        },
        {
            name: "Ashton Cox",
            position: "Junior Technical Author",
            year: "2009/01/12",
            salary: "$86,000",
        },
        {
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            year: "	2012/03/29",
            salary: "$433,060",
        },
        {
            name: "Michelle House",
            position: "Integration Specialist",
            year: "2011/06/02",
            salary: "$95,400",
        },
        {
            name: "Unity Butler",
            position: "Office Manager",
            year: "2008/12/11",
            salary: "$85,675",
        },
        {
            name: "Yuri Berry",
            position: "Chief Marketing Officer (CMO)",
            year: "2009/06/25",
            salary: "$675,000",
        },
    ];






  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          DataTables Example
        </h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {
              tableObj.map((item, index)=>{
                return (<tr key={index}>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.salary}</td>
                <td>{item.year}</td>
              </tr>)})
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
