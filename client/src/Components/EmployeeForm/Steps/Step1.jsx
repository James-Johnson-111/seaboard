import React from 'react';

const Step1 = ( props ) => {

    return (
        <>
            <div className="d-lg-flex justify-content-center mb-3">
                <div className="mr-lg-2 mr-md-2 mr-sm-0 sides">
                    <label className="mb-0">Name</label>
                    <input onChange={ props.change } name="Name" type="text" pattern="^[A-Za-z]+$" title="Name only contains letters" className="form-control" required minLength="3" maxLength="15" />
                </div>
                <div className="ml-lg-2 ml-md-2 ml-sm-0 sides">
                    <label className="mb-0">Employee Father Name</label>
                    <input onChange={ props.change } name="FatherName" type="text" pattern="^[A-Za-z]+$" title="Father Name only contains letters" className="form-control" required minLength="3" maxLength="15" />
                </div>
            </div>
            <div className="d-lg-flex justify-content-center mb-3">
                <div className="mr-lg-2 mr-md-2 mr-sm-0 sides">
                    <label className="mb-0">Date Of Birth</label>
                    <input onChange={ props.change } name="Dob" type="date" className="form-control" required minLength="3" maxLength="15" />
                </div>
                <div className="ml-lg-2 ml-md-2 ml-sm-0 sides">
                    <label className="mb-0">Place Of Birth</label>
                    <input list="cities" onChange={ props.change } name="PoB" type="text" className="form-control" pattern="^[A-Za-z]+$" title="City only contains letters" required minLength="3" maxLength="15" />
                    <datalist id="cities">
                        <option value="Karachi" />
                        <option value="Lahore" />
                        <option value="Queta" />
                        <option value="Peshawer" />
                        <option value="Kashmir" />
                    </datalist>
                </div>
            </div>
        </>
    )

};

export default Step1;