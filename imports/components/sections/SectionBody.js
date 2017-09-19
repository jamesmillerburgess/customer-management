import React from 'react';
import './SectionBody.scss';

const SectionBody = () => (
  <div className="section-body">
    <div className="sidebar">
      <ul>
        <li className="sidebar-header">All companies</li>
      </ul>
    </div>
    <div className="content">
      <table>
        <tbody>
          <tr>
            <th>NAME</th>
            <th>CREATE DATE (GMT+2)</th>
            <th>FIRST CONTACT CREATE DATE (GMT+2)</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default SectionBody;
