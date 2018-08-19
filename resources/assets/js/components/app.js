import React, { Component } from 'react';
import Files from './files';

export default class App extends Component {
  render() {
    return (
	    <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example File Manager</div>
                            <Files />
                        </div>
                    </div>
                </div>
            </div>
	    </div>
    );
  }
}