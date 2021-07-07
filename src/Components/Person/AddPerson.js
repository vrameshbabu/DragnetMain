import React, { Component } from "react";
import { Link } from "react-router-dom";
export class AddPerson extends Component {
  render() {
    return (
      <div className="app-main__inner">
        <div class="app-page-title">
          <div class="page-title-wrapper">
            <div class="page-title-heading">
              <div class="page-title-icon">
                <i class="lnr-picture text-danger"></i>
              </div>
              <div>
                Add Person
                <div class="page-title-subheading">
                  Inline validation is very easy to implement using the
                  Architect Framework.
                </div>
              </div>
            </div>
            <div class="page-title-actions">
              <button
                type="button"
                data-toggle="tooltip"
                title=""
                data-placement="bottom"
                class="btn-shadow mr-3 btn btn-dark"
                data-original-title="Example Tooltip"
              >
                <i class="fa fa-star"></i>
              </button>
              <div class="d-inline-block dropdown">
                <button
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="btn-shadow dropdown-toggle btn btn-info"
                >
                  <span class="btn-icon-wrapper pr-2 opacity-7">
                    <i class="fa fa-business-time fa-w-20"></i>
                  </span>
                  Buttons
                </button>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        <i class="nav-link-icon lnr-inbox"></i>
                        <span>Inbox</span>
                        <div class="ml-auto badge badge-pill badge-secondary">
                          86
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        <i class="nav-link-icon lnr-book"></i>
                        <span>Book</span>
                        <div class="ml-auto badge badge-pill badge-danger">
                          5
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        <i class="nav-link-icon lnr-picture"></i>
                        <span>Picture</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        disabled=""
                        href="javascript:void(0);"
                        class="nav-link disabled"
                      >
                        <i class="nav-link-icon lnr-file-empty"></i>
                        <span>File Disabled</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="main-card mb-3 card">
          <div className="card-body">
            <h5 className="card-title">Add Person</h5>
            <form className="needs-validation" noValidate>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Person Name * </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom02">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Last name"
                    defaultValue="Otto"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom02">Alias Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Last name"
                    defaultValue="Otto"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom02">Father Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Last name"
                    defaultValue="Otto"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Gender * </label>
                  <div>
                    <div class="custom-radio custom-control custom-control-inline">
                      <input
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        for="exampleCustomRadio"
                      >
                        Female
                      </label>
                    </div>

                    <div class="custom-radio custom-control custom-control-inline">
                      <input
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        for="exampleCustomRadio"
                      >
                        Male
                      </label>
                    </div>
                  </div>

                  {/* <select name="select" id="exampleSelect" class="form-control">
                                                        <option>Male</option>
                                                        <option>Female</option> 
                                                    </select> */}

                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Mobile Number </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Aadhaar Number </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Passport Number </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom02">Date of Birth</label>

                  <div class="input-goup date">
                    <div class="input-group date">
                      <input
                        type="date"
                        class="form-control pull-right"
                        id="datepicker"
                      />
                    </div>
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom02">Age as On </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Last name"
                    defaultValue="Otto"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 ">
                  <label htmlFor="validationCustom01">Marital Status </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom02">Nationality </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Last name"
                    defaultValue="Otto"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Religion</label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Caste </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Person type </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Occupation </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">
                    Organization type:*
                  </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">
                    Organization name:*
                  </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">
                    Position in organization:*
                  </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">
                    Level of position:*
                  </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Position From </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Edu.Qualification </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">
                    District/Commissionerate{" "}
                  </label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Police Station</label>

                  <select name="select" id="exampleSelect" class="form-control">
                    <option> Select </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>

                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01"> Current address </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationCustom01">Permanent address</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <div class="position-relative form-group">
                    <label for="exampleFile" class="">
                      File
                    </label>
                    <input
                      name="file"
                      id="exampleFile"
                      type="file"
                      class="form-control-file"
                    />
                    <small class="form-text text-muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </small>
                  </div>
                </div>
      
              </div>
              <div className="row">
                <div className="col-md-4 ">
                  <label htmlFor="validationCustom01">
                    Any Political History
                  </label>
                  <div className="row">
                    <div className="col-md-6">
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="exampleCustomRadio"
                          name="customRadio"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="exampleCustomRadio"
                        >
                          Yes
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="exampleCustomRadio"
                          name="customRadio"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="exampleCustomRadio"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div className="col-md-8">
                  {/* <div className="row"> */}
                    <div class="main-card mb-3 card">
                      <div class="card-body">
                      <h5 class="card-title">Political hisyory Details</h5>
                      <div class="table-responsive">
                      <table class="mb-0 table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Position</th>
                          <th>party/organization</th>
                          <th>Action</th>
                    
                        </tr>
                      </thead>
                      <tr>
                           <td>2001</td>
                           <td></td>
                           <td>Aam Admi Party</td>
                           <td>
                           <Link className="Add" data-toggle="modal">
                                  <i
                                    class="fa fa-plus"
                                    data-toggle="tooltip"
                                    title="Add"
                                  ></i>
                                </Link>
                           </td>
                      </tr>
                      </table>
                      </div>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
                </div>

              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPerson;
