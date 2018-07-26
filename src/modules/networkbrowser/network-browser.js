import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';
import { addTab } from '../layout/uilayout-actions';

class NetworkBrowser extends React.Component{
    static icon = "sitemap";
    static label = "Network Browser";
    constructor(props){
        super(props);
    }
    
    launchEntityTab = (options) => (e) => { 
        e.preventDefault();
        
        let tabId = options.entity + "Tab";
        this.props.dispatch(addTab(tabId, 'ElementBrowser', {
            entity: options.entity,
            title: options.title
        }));
        
        $('#myTab li #'+this.props.activeTab+"-tab").tab('show');
    }
    
    render(){
        return (
                
        <div>
            <h3><FontAwesomeIcon icon={NetworkBrowser.icon}/> Network Browser</h3>

            <div className="card  mb-2">
                <div className="card-body p-3">
                    <a href="#" className="launch-network-tree"><FontAwesomeIcon icon="arrow-right"/> Launch tree browser</a>        
                </div>
            </div>
            
            <div className="card">
                <div className="card-body p-3">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><a href="#" className="show-node-list" onClick={this.launchEntityTab({entity:'node', title: 'Nodes'})}><FontAwesomeIcon icon="arrow-right"/> View all nodes</a></td>
                                <td><a href="#" className="show-site-list" onClick={this.launchEntityTab({entity:'site', title: 'Sites'})}><FontAwesomeIcon icon="arrow-right"/> View all sites</a></td>
                                <td><a href="#" className="show-nbr-list"><FontAwesomeIcon icon="arrow-right"/> View all relations</a></td>
                            </tr>
                            <tr>
                                <td><a href="#" className="show-2gcell-list"><FontAwesomeIcon icon="arrow-right"/> View 2G cell parameters</a></td>
                                <td><a href="#" className="show-3gcell-list"><FontAwesomeIcon icon="arrow-right"/> View 3G cell parameters</a></td>
                                <td><a href="#" className="show-4gcell-list"><FontAwesomeIcon icon="arrow-right"/> View 4G cell parameters</a></td>

                                <td></td>
                            </tr>
                            <tr>
                                <td><a href="#" className="load-2g-externals"><FontAwesomeIcon icon="arrow-right"/> View 2G externals</a></td>
                                <td><a href="#" className="load-3g-externals"><FontAwesomeIcon icon="arrow-right"/> View 3G externals</a></td>
                                <td><a href="#" className="load-msc-definitions"><FontAwesomeIcon icon="arrow-right"/> View MSC definitions</a></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
            
        </div>
        );
    }
}

export default connect()(NetworkBrowser);