const CounsellorData = ({ counsellors }) => {
    return (
        <>  
                    <table class='table table-striped'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>MobileNo</th>
                                <th>State</th>
                                <th>District</th>
                                <th>Village</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {counsellors.map(counsellor => (
                                <tr key={counsellor.id}>
                                    <td>{counsellor.id}</td>
                                    <td>{counsellor.name}</td>
                                    <td>{counsellor.email}</td>
                                    <td>{counsellor.mobileNo}</td>
                                    <td>{counsellor.state}</td>
                                    <td>{counsellor.district}</td>
                                    <td>{counsellor.village}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </>
    )
};

export default CounsellorData;