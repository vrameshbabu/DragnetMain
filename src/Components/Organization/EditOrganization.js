import React, { Component } from "react";

class EditOrganization extends Component {
  render() {
    return (
      <div>
        <div className="app-main__inner">
          <div class="app-page-title">
            <div class="page-title-wrapper">
              <div class="page-title-heading">
                <div class="page-title-icon">
                  <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
                </div>
                <div>
                  Organization Details
                  {/* <div class="page-title-subheading">
                    Tables are the backbone of almost all web applications.
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label>Search Organization</label>
            </div>
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-check" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12 col-md-6 col-md-4">
              <div class="main-card mb-3 card">
                <div class="card-body">
                  <h5 class="card-title">View Organization</h5>
                  <div class="table-responsive">
                    <table class="mb-0 table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Organization Name</th>
                          <th>Type</th>
                          <th>Short Name</th>
                          <th>Formation Date</th>
                          <th>Frontal Organization</th>
                          <th>Address</th>
                          <th>Created by</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Aam Aadmi Party</td>
                          <td>Political</td>
                          <td>AAP</td>
                          <td></td>
                          <td></td>
                          <td>Hyderabad</td>
                          <td>Admin</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Abhudaya Art Academy</td>
                          <td>Miscellaneous</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>riorck</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Adima Girijana Kolam Seva Sangham</td>
                          <td>Caste </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>intadbd</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditOrganization;
